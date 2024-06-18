@echo off
set "game_exe=D:\Games\Wuthering Waves\Wuthering Waves Game\Client\Binaries\Win64\Client-Win64-Shipping.exe"

echo Running game...
timeout /t 3
start "" /B "%game_exe%" -fileopenlog

:end
