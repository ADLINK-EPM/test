<img src="UbuntuImages.assets\ubuntu_logo_hex.png" alt="ubuntu_logo_hex" style="zoom:70%;" align="right" />
<br>

# Ubuntu Focal Fossa 20.04 LTS Wayland Desktop Environment

<div class= "bullets">

## Binary Image download Link

Ubuntu 20.04 LTS with Wayland desktop (size of compressed file: 1.81 GB): [click here](https://hq0epm0west0us0storage.blob.core.windows.net/$web/public/SMARC/LEC-iMX8MP/Images/Ubuntu/LEC-IMX8MP-2G-IPi-SMARC-PLUS-Ubuntu20_04-1v7-20210715.zip)

**Note**:

1. Please refer to [here](HowToFlashImageSD.html) to guide you on how to flash image to SD card.
2. I-Pi SMARC IMX8M Plus board can also work without SD Card by booting the image into eMMC. For those who want to boot the image in eMMC [click here](HowToFlashImageeMMC.html).



Boot the system with the SD card placed in the slot located on the carrier. Once booted, you will see the login screen.

<img src="UbuntuImages.assets\Screenshot_1.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />


Ubuntu of different versions (16.04/18.04) is not available for download but has to be compiled by the user himself. Please follow [the steps](HowToBuildUbuntu.html) in “build your OS” to do this.

**Note**: Make sure the boot loader on the carrier board is set according to the SD card or eMMC as you boot
<img src="UbuntuImages.assets\Boot_loadert.png" alt="logo" style="margin-left: auto; margin-right: auto; display: block;" />

## Usernames and Passwords

- Two usernames are defined on the system: **root**, **imx8mp**
- password is **adlink123** for both the usernames

After login, you can see the home screen

<img src="UbuntuImages.assets\Screenshot_2.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />


The default home screen of Ubuntu 20.04 of I-Pi SMARC IMX8M Plus appears like above. You can also change the background of your home screen.


## Supported features & interfaces

- Linux Kernel version: **5.4.70**
- 2D / 3D Graphics Acceleration which supports Wayland
- [40 Pin expansion Header](UserInterfaces.html)  with [Eclipse Mraa library](https://github.com/eclipse/mraa) and [Eclipse UPM library](https://github.com/eclipse/upm) which supports C/C++, Python, JAVA and JavaScript
- [SEMA 4.0](https://adlink-epm.github.io/sema-doc/#/) (Smart Embedded Management Agent) support the functions such as CPU temperature, voltage monitoring total up time, ... etc.
- 2D / 3D Graphics Acceleration which supports Wayland
- Support1080p60 H.265, H.264, VP9, VP8 decoder, 1080p60 H.265, H.264 encoder
- HDMI output with the resolution up to 1920x1080@60Hz
- 4 x USB 2.0 ports
- 2 x 10/100 Gb LAN ports
- USB OTG Serial Gadget supported (baud rate: 115200)
- CAN FD Bus interface
- Audio & speaker
- Raspberry Pi Camera V2.1 (2 Lanes) - SONY iMX219 sensor ([Datasheet](https://www.raspberrypi.org/documentation/hardware/camera/))

Running glmark2-es2 program to benchmark for GL7000UL with Wayland

<img src="UbuntuImages.assets\glmark2.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

## 
</div>