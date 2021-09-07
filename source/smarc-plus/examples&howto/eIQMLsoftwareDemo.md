<div class = "bullets">

# eIQ ML software demo on NXP i.MX 8M Plus development kit

This demo demonstrates the use of eIQ, a machine learning software development environment from NXP that uses ML algorithms. The eIQ software is integrated into our I-Pi SMARC IMX8M Plus with yocto based linux image for interesting AI application.

<div class="contentiframe">

<iframe  class="responsive-iframe"  width="640" height="480" src="https://www.youtube.com/embed/0TG4vyJSRY4"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>

### Prerequisites

### Hardware Requirement

* I-Pi SMARC IMX8M Plus Development Kit
* Monitor, Keyboard and Mouse
* HDMI Display
* Ethernet

### Softwares Requirement
* Yocto flashed in eMMC

### What you will see ( AI demos)



<img src="eIQMLsoftwareDemo/fig1copy.PNG" />



### Object Detection 

Object detection is a computer vision and image processing technique that identifies objects such as people, buildings, or cars in images or videos. The object detection draws bounding boxes around these detected objects, which allows us to see where the identify things are in a given scene. Nowadays, Object detection is a handy application in video surveillance and image retrieval systems.

<center>

| Model       | Algorithm      | Inference Enigine | NPU Inferenceing (ms) | CPU Inferencing (ms)|
| --------------- |----------------------- |------------------------- |------------------------ |-------------------------- |
| Object detection        | Single Shot detection (SSD)  | Tflite 2.3.0 | 10.25 |41 |
| Object detection | Deep Neural Network (DNN) | OpenCV 4.2.0      | 56 | 123.6 |
| Object detection | YOLO v3 | Tflite 2.3.0 | 102 | 225 |

</center>

<center>
<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.24.25 AM.png" alt="Screen Shot 2021-05-10 at 9.24.25 AM" style="zoom: 33%;" />


</center>

### Facial Expression Dectection

Facial emotion recognition is the process of detecting human emotions from facial expressions. It is difficult for us humans to recognize emotions in certain situations, and now,  facial expression detection applications have been developed to help people with emotion recognition. This technology is becoming more accurate and will eventually be able to read emotions as well as our brains do or even better. 


<center>

| Model                       | Algorithm | Inference Enigine | NPU Inferenceing (ms) | CPU Inferencing (ms) |
| --------------------------- | --------- | ----------------- | --------------------- | -------------------- |
| Facial Expression detection | MobileNet | Tflite 2.3.0      | 35                    | 98                   |

</center>

<center>

<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.25.25 AM.png" alt="Screen Shot 2021-05-10 at 9.25.25 AM" style="zoom:25%;" />

</center>

<center>
<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.25.57 AM.png" alt="Screen Shot 2021-05-10 at 9.25.57 AM" style="zoom:25%;" />


</center>


### Image Classification

Image classification refers to identifying objects and classifying them into categories based on the basic training set of data containing observation with the known class.
<center>

| Model                | Algorithm | Inference Enigine | NPU Inferenceing (ms) | CPU Inferencing (ms) |
| -------------------- | --------- | ----------------- | --------------------- | -------------------- |
| Image Classification | MobileNet | Tflite 2.3.0      | 5                     | 36                   |

</center>

<center>

<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.30.33 AM.png" alt="Screen Shot 2021-05-10 at 9.30.33 AM" style="zoom: 33%;" />

</center>

### Fire & No Fire Classification

Fire classification and detection are designed to detect fires in Images or videos. This application has recently played a crucial role in reducing fire losses by alarming users early through early fire detection. These detections ( Fire and no Fire detection) are conducted with the use of complex algorithms.

<center>

| Model                         | Algorithm                        | Inference Enigine | NPU Inferenceing (ms) | CPU Inferencing (ms) |
| ----------------------------- | -------------------------------- | ----------------- | --------------------- | -------------------- |
| Fire & No Fire Classification | Convolution Neural Network (CNN) | ArmNN             | 7.6                   | 42.8                 |

</center>

<center>

<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.26.19 AM.png" alt="Screen Shot 2021-05-10 at 9.26.19 AM" style="zoom: 33%;" />

</center>

<center>

<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.26.40 AM.png" alt="Screen Shot 2021-05-10 at 9.26.40 AM" style="zoom: 33%;" />

</center>

### OpenPose Detection

The pose is a computer vision task that identifies a person’s pose in an image or video. We can also think of pose estimation as the problem of determining the position and orientation of a camera relative to a given person. This is typically done by identifying, locating, and tracking the number of key points on a given object or person. For things, this could be corners or other significant features. And for humans, these key points represent major joints like an elbow, hand, neck, or knee.

<center>

| Model              | Algorithm | Inference Enigine | NPU Inferenceing (ms) | CPU Inferencing (ms) |
| ------------------ | --------- | ----------------- | --------------------- | -------------------- |
| OpenPose detection | MobileNet | Tflite 2.3.0      | 48                    | 118                  |

</center>

<center>
<img src="eIQMLsoftwareDemo/Screen Shot 2021-05-10 at 9.29.13 AM.png" alt="Screen Shot 2021-05-10 at 9.29.13 AM" style="zoom: 33%;" />



<center>
<img src="eIQMLsoftwareDemo/figsix.png" alt="fig6"  />
</center>



</div>