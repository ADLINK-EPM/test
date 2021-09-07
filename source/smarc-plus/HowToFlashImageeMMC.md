# Boot from eMMC
<div class = "bullets">
This document provides the detailed instructions of how to flash the image to eMMC of I-Pi SMARC IMX8M plus for both Windows and Linux users.

* [Windows Host Users](#Windows-Host)
* [Linux Host Users](#Linux-Host)    

## **Prerequisites**

- Download the prebuilt image to the working directory on your development host [click here](https://www.ipi.wiki/pages/downloads-imx8mplus).

- Prepare your target board by connecting the power cord and the micro USB OTG cable to the host computer.

- Make sure your boot loader switches are in eMMC mode which is 1000.

  <img src="HowToFlashImageeMMC.assets\Boot_loadert.png" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

## Windows Host

- Download and install on your host computer Win32DiskImager [click here](https://win32diskimager.download/). Win32DiskImager is used to flash your system image.
- Open Win32 Disk Imager and select the target board as device, be sure not to select any other conneted USB drive.
- Be sure to connect both power and micro USB OTG cable to the target board.

- Open your file explorer and browse to the image file which you have previously downloaded.

**Note**
	Without the power connected, board will not come up.



<img src="HowToFlashImageeMMC.assets\win32_1.PNG" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />

  <img src="HowToFlashImageeMMC.assets\win32_2.PNG" alt="logo" style="zoom:100%; margin-left: auto; margin-right: auto; display: block;" />


- Remove the micro USB OTG device.


-  Connect HDMI cable from Monitor to target board to check the display.

## Linux Host

1. Copy the prebuilt bootable image to the working directory on your development host. Connect the target board to the host and enter the following command to flash the image.

   **Warning**: Make sure your target board is recognized as storage device in development host. You can check the disk partitions to see if there are other device names, for example /dev/sdb or /dev/sdc. you can also check device name with ``` dmesg ``` in terminal. Data loss may result if written to the wrong device or in the worst case you kill your hosts OS.

   ```python
   $ sudo dd if=[your image] of=/dev/sd[x]
   ```

2. After dd has completed, enter the following command:

```python
$ sync
```

After sync, the image will be flashed into eMMC successfully. 

</div>