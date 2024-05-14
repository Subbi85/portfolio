# Prompt the user to enter a commit message
$commitMessage = Read-Host "Enter your commit message"

# Navigate to your project directory

# Stage all changes for commit
git add .

# Commit changes with the specified message
git commit -m $commitMessage

# Push changes to GitHub
git push origin master

# Run npm run build command
npm run build

# Set up WinSCP .NET assembly
Add-Type -Path "WinSCPnet.dll"

# Configuration
$sftpHost = "ssh.strato.de"
$sftpUsername = "542289190.swh.strato-hosting.eu"
$sftpPassword = "!strato2024"
$localPath = "/build"
$remotePath = "/"

# Connect to the SFTP server
$sessionOptions = New-Object WinSCP.SessionOptions -Property @{
    Protocol = [WinSCP.Protocol]::Sftp
    HostName = $sftpHost
    UserName = $sftpUsername
    Password = $sftpPassword
}

$session = New-Object WinSCP.Session

try {
    # Connect
    $session.Open($sessionOptions)

    # Upload files
    $transferOptions = New-Object WinSCP.TransferOptions
    $transferOptions.TransferMode = [WinSCP.TransferMode]::Binary

    $transferResult = $session.PutFiles($localPath, $remotePath, $False, $transferOptions)

    # Throw on any error
    $transferResult.Check()

    # Print results
    foreach ($transfer in $transferResult.Transfers) {
        Write-Host ("Upload of {0} succeeded" -f $transfer.FileName)
    }
} finally {
    # Disconnect, clean up
    $session.Dispose()
}
