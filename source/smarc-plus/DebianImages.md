title: Debian Image
---
<div class = "bullets">
<img align="right" src="DebianImages.assets/debian-logo.jpg" width ="150"/>

## Debian 10 Buster with Wayland Desktop Environment

Boot the system with the SD card placed in the slot located on the carrier, once booted you will see the login screen.
<center>
<img src="DebianImages.assets/Screenshot_2020-04-23_07-31-23-1587627343117.png" alt="Screenshot_2020-04-23_07-31-23" style="zoom: 33%;" />
</center>
​       **Note:** The kernel used is not Debian native. Debian rootfs image which is bootstrapped by the IMX8MP u-boot & Kernel.

<br/>
<div class = "bullets">
### Binary Image download Link

* Debian 10 Buster with Wayland desktop + MRAA/UPM (size of compressed file: 2.5 GB): [click here](https://hq0epm0west0us0storage.blob.core.windows.net/$web/public/SMARC/LEC-iMX8MP/Images/Debian/LEC-IMX8MP-2G-IPi-SMARC-PLUS_Debian10_v2_20210519.zip)

* All versions: <a data-toggle="collapse" data-target="#demo" href="#">click here</a>

    <div id="demo" class="iframe-container collapse" style="z-index: 100; background-color: white;"><iframe class="download-area" src="https://hq0epm0west0us0storage.z22.web.core.windows.net/?prefix=public/SMARC/LEC-iMX8MP/Images/Debian/&amp;pageLevel=0" scrolling="no">
      	</iframe></div>
    <style>
    .iframe-container {
        width: 110%;
    }
    .download-area {
    	width:100%;
      min-height: 260px;
      height: 260px;
      border: none;
    }
    </style>


   **Note**: 

1. Auto-login is enabled and no need to enter password   
2. Please refer to [here](HowToFlashImageSD.html#Flash-Ubuntu-or-Debian-Image) to guide you how to flash image to SD card
3. Boot selector in I-Pi board won't work due to the design of [PX30 booting procedure](PX30BootFlow.html) ( need to change)


<br>

### Usernames and passwords

   * Two users are defined for use on the system: **imx8mp** and **root**.
   * Passwords is **adlink123** for two users.

<br>

### Supported features & interfaces 

* Linux Kernel version: **4.4.167**
* [40 Pin expansion Header](UserInterfaces.html) with [Eclipse Mraa library](https://github.com/eclipse/mraa) and [Eclipse UPM library](https://github.com/eclipse/upm) which supports C/C++, Python, JAVA and JavaScript 
* [SEMA 4.0](https://adlink-epm.github.io/sema-doc/#/) (Smart Embedded Management Agent) support the functions such as CPU temperature, voltage monitoring  total up time, ... etc.
* 2D / 3D Graphics Acceleration [with Arm Mali-G31 GPU](https://developer.arm.com/ip-products/graphics-and-multimedia/mali-gpus/mali-g31-gpu) which supports x11 display server
* Support H.265, H.264, VP8, MPEG4 and MPEG2 video codec with up to 1080p60fps
* HDMI output with the resolution up to 1920x1080@60Hz
* 4x USB 2.0  ports
* 2x  10/100 Mb LAN ports 
* USB OTG Serial Gadget supported (baud rate: 115200)
* CAN FD Bus interface
* Analog to Digital input interface
* Audio & speaker
* Raspberry Pi Camera V2.1 (2 Lanes) - SONY iMX219 sensor ([Datasheet](https://www.raspberrypi.org/documentation/hardware/camera/))  
* WIFI/BT USB Dongle ([EW-7611ULB datasheet](https://www.edimax.com/edimax/mw/cufiles/files/download/datasheet/EW-7611ULB_datasheet_English.pdf))

 <br>



**Running glmark2-es2 program to benchmark for Mali-G31 with x11**
<center>
<img src="DebianImages.assets/glmark2_debian.png" alt="glmark2_debian" style="zoom: 40%;" />
</center>

</div>