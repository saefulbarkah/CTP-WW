@echo off
set "source_folder=D:\Games\_cheats\Wuthering Waves\~mod"
set "destination_folder=D:\Games\Wuthering Waves\Wuthering Waves Game\Client\Content\Paks"
set "game_exe=D:\Games\Wuthering Waves\Wuthering Waves Game\Client\Binaries\Win64\Client-Win64-Shipping.exe"

rem Check if the source folder exists
if not exist "%source_folder%" (
    echo The source folder does not exist.
    pause
    goto end
)

rem Check if the game executable exists
if not exist "%game_exe%" (
    echo The game executable does not exist.
    pause
    goto end
)

rem Check if the destination folder exists
if not exist "%destination_folder%" (
    echo The destination folder does not exist.
    pause
    goto end
)


echo Installing mods...
rem Check if the destination folder ~mod exists
if exist "%destination_folder%\~mod" (
    rd /S /Q "%destination_folder%\~mod"
)

timeout /t 2
xcopy "%source_folder%" "%destination_folder%\~mod" /e /i
echo Successfuly installed...
timeout /t 3
@REM start "" /B "%game_exe%" -fileopenlog

:end
