# Flashing Ubuntu/Debian Image into MicroSD Card using Windows host

In this tutorial, we describe the procedures on how to flash **Ubuntu/Debian** image into MicroSD Card on Windows environment.

## Prerequisites

### **Hardware Requirement:**

- I-Pi SMARC IMX8M Plus Development Kit
- Monitor, Keyboard and Mouse
- HDMI Display
- MicroSD Card

### **Software Requirement**

- Ubuntu or Debian as your desired OS  [click here](https://www.ipi.wiki/pages/downloads-imx8mplus)

- Rufus tool [click here](https://rufus.ie/)


### Steps:

4. Go to your working directory to extract the downloaded Ubuntu/Debian image.
5. Insert an empty MicroSD Card into the card reader and then insert the card reader into the host computer.
3.  Open rufus.exe to flash the image into the MicroSD Card, It will auto-detected MicroSD Card as shown below.

<img src="FlashingUbuntuDebianImageintoMicroSD/rufus11.png" alt="rufus_1"  />

5. Press the **SELECT** button to browse to the .img file in your directory. After selecting the .img file, click **START**. 

   ![rufus_1](FlashingUbuntuDebianImageintoMicroSD/rufus_2.png)

6. A Warning message will pop up, click **OK**.

   <img src="FlashingUbuntuDebianImageintoMicroSD/rufus_3.png" alt="rufus_1" style="zoom: 50%;" />

7. Click  **OK** to continue

   <img src="FlashingUbuntuDebianImageintoMicroSD/rufus_4.png" alt="rufus_1" style="zoom: 50%;" />

8. Wait for the process to finish.

<img src="FlashingUbuntuDebianImageintoMicroSD/rufus_5.png" alt="rufus_1" style="zoom: 50%;" />

9. After successfully booting, you can now connect to the I-Pi SMARC IMX8M Plus 

   ​	**Note:**  I-Pi SMARC IMX8M Plus Connections

   ​				Refer to this link for I-Pi Connections.
   ​				https://www.youtube.com/watch?v=Axp5oOVpnDE

10. Power on the board to boot.


####Default home screen for Ubuntu


![Screenshot_2](FlashingUbuntuDebianImageintoMicroSD/Screenshot_2.png)



####Default home screen for Debian

![yocto_boot_screen](FlashingUbuntuDebianImageintoMicroSDs/yocto_boot_screen.png)
