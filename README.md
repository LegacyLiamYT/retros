# retrOS

> A retired experimental retro operating system prototype for MakeCode Arcade.

## Status

retrOS is no longer actively maintained. This project was created as a small retro OS concept to explore boot sequences, recovery flows, and login-style interfaces in MakeCode Arcade.

It remains here as a historical project archive and a reference for early experiments in retro system design.

## What is retrOS?

retrOS is a mini retro-style operating system concept built in MakeCode Arcade. It simulates a simple boot environment with:

- a boot selector menu
- a terminal-style startup sequence
- a loading screen animation
- a login interface
- a recovery/reset environment
- basic settings persistence and deletion logic

## Features

- Bitmap boot mode and recovery mode selection
- Startup diagnostics for screen, SRAM, and ROM state
- Retro loading screen and boot splash
- User menu with login and about options
- Recovery flow for listing and deleting stored settings
- Built for MakeCode Arcade and compatible hardware

## Project flow

The project is structured around a simple OS-like startup:

1. Boot menu appears
2. User chooses between normal boot and recovery mode
3. A system screen runs startup checks
4. A loading screen plays
5. Login UI is displayed
6. Recovery mode can clear all stored settings

## MakeCode usage

You can import this project directly into MakeCode Arcade:

1. Open https://arcade.makecode.com/
2. Click Import
3. Choose Import URL
4. Paste: https://github.com/LegacyLiamYT/retros
5. Click import

## Use as extension

This repository can also be added as an extension in MakeCode:

1. Open https://arcade.makecode.com/
2. Create a new project
3. Open the gear menu
4. Click Extensions
5. Search for `https://github.com/LegacyLiamYT/retros`

## Repository notes

This project was part of a wider set of experiments with retro OS concepts, boot logic, and desktop-style interfaces in MakeCode. It was never intended to be a full operating system, but it explored what a lightweight retro system could look like inside Arcade.

## Example boot logic

The project includes a basic flow similar to:

- `MyBootMan()`
- `BitmapTerminalSequence()`
- `BitmapLoadingScreenGUI()`
- `LoginGUI()`
- `BitmapRecoveryEnviroment()`

## Credits

Created and developed by LegacyLiamYT.

## License

This project is distributed as-is for experimentation and learning purposes.

---

This README was rewritten to reflect the project as a retired prototype rather than an active product.
