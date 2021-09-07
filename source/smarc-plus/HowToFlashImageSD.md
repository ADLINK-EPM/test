<div class = "bullets">

# How to Flash an Image to the SD Card
This procedure describes how to flash **Ubuntu/Debian/Yocto/Android** image to the SD Card.

* [Flash Ubuntu or Debian Image](#Flash-Ubuntu-or-Debian-Image)

* [Flash Yocto or Android Image](#Flash-Yocto-or-Android-Image)    

## Flash Ubuntu or Debian Image

### Prerequisites

- Download the prebuilt bootable Ubuntu image to the working directory on your development host.
- In Windows environments, please download [rufus](https://rufus.ie/) to flash the image to the SD Card.
- In a Linux environment use ``` dd ``` command.

 **Note:** All files will be erased on the SD Card. The size should be preferable 16 GB or larger. 

### Windows Host

1. Insert an empty MicroSD Card into the development host and execute rufus.exe as the picture below. It will auto-detected your storage drives.

<img src="HowToFlashImageSD.assets\rufus_1.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

2. Press the **SELECT** button and browse to the .img file previously copied to your working directory on the development host. Then click **START** and wait for the process to be finished.

<img src="HowToFlashImageSD.assets\rufus_2.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

### Linux Host

1. Copy the prebuilt bootable Ubuntu/Debian image to the working directory on your development host. Insert an empty SD Card into the development host and enter the following command to copy the .img to the SD Card.

   **Warning**: Make sure you first properly identify the SD Card device name as for example (/dev/sdb or /dev/sdc) by using "gparted". Data loss may result if written into the wrong device or in the worst case you kill your hosts OS.

   ```python
   $ sudo dd if=[your image].img of=/dev/sd[x]
   ```

2. After dd has completed, enter the following command:


  ```python
  $ sync
  ```
**Note**: You can also flash Yocto and Android images using Linux host, but make sure, you type the correct image format in your ``` dd ``` command.

## Flash Yocto or Android Image

### Prerequisites

- Copy the prebuilt bootable Yocto image to the working directory on your development host.

- In Windows environments, please download the [Win32DiskImager](https://win32diskimager.download/) to flash the image to the SD Card.

  **Note:** All files will be erased on the SD Card. The size should be preferable 16 GB or larger.

### Windows Host

Insert an empty MicroSD Card into the development host and execute the Win32DiskImager tool.

- The SD card device is automatically detected.
- Choose Image file by clicking on File explorer icon.
- Select the image form the downloaded directory of host computer, then click the **Write** button to start the process.


<img src="HowToFlashImageSD.assets\win32_1.PNG" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

\* The tool will prompt to the user that data will be lost. Select "Yes" to continue

- Once done, click **OK** and and it will show the message that **Write successful**.

  <img src="HowToFlashImageSD.assets\win32_2.PNG" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

- Eject the SD card and insert it into the target board and power on the board to boot up.

**Note:** If you want to use Linux development host for flashing **Yocto/Android**, you can use ``` dd ``` command as shown for **Ubuntu/Debian**.

Make sure the boot loader on the carrier board is set according to the SD card or eMMC as you boot.

<img src="HowToFlashImageSD.assets\Boot_loadert.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />


</div> 