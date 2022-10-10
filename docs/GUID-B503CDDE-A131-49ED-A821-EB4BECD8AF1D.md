# MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application'
**Setting up the hardware**

The following table shows the target hardware for the application projects.

| Project Name| Hardware |
|:---------:|:---------:|
| mclv2_pic32mk_mca_pim.X |<br>[MCLV2 Development Board](https://www.microchip.com/DevelopmentTools/ProductDetails/DM330021-2)<br>[PIC32MK MCA Motor Plugin Module](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/32-bit-mcus/pic32-32-bit-mcus/pic32mk)<br>[Hurst Motor with encoder](https://www.microchip.com/DevelopmentTools/ProductDetails/PartNo/AC300022) |
|||

**Setting up [MCLV2 Development Board](https://www.microchip.com/DevelopmentTools/ProductDetails/DM330021-2)**

- Mount the PIC32MK MCA Motor Control Plug In Module on U9 header. 

- Place the "External Opamp Configuration" Matrix board at J14.

    ![External OPAMP](GUID-0E7A727E-67E0-4A34-938F-040CFCFCA861-low.png)

- Motor Connections with MCLV2 Board: 

    |Motor | MCLV2 Board |
    |:----:|:------:|
    | Phase U | M1 |
    | Phase V | M2 |
    | Phase W | M3 |
    | +5V     | +5V |
    | -5V |GND |
    | A | HA |
    | B | HB |

    ![Motor Connections](GUID-0B35F2F8-8DDF-4A9C-A7C2-5F6BB221C2A0-low.png)

- Jumper Settings: 
    - JP1 - Curr, JP2 - Curr, JP3 - Curr 
    - In order to use RS232 port for X2CScope Communication JP4 - UART, JP5 - UART 
    - In order to use USB port for X2CScope Communication JP4 - USB, JP5 - USB

    ![jumper Settings](GUID-654C6CC3-1D97-4A08-8F9A-15635A1C014D-low.png)


- Power the board with a 24V DC supply using J2 or BP1-BP2. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. 

    ![power](GUID-B9F34BA3-07EB-4D81-810D-FFCAF645DA56-low.png)

- Complete Setup

    ![Setup](GUID-28FEDBAE-528B-44A7-903C-4945A929AC98-low.png)

**Running the Application**

1. Build and Program the application using its IDE
2. Press switch S2 to start the motor
3. Vary potentiometer to change the speed of the motor
4. Press switch S2 to stop the motor
5. Press switch S3 to change the direction of the motor
6. Press switch S2 again to start the motor
7. Monitor graphs on X2C Scope

Refer to the following tables for switch and LED details:

| Switch | Description |
|------|----------------|
| Switch S2 | To start or stop the motor |
| Switch S3 | To change the direction of rotation. <br>Direction toggle command is accepted only when motor is stationary. |
||

| LED D2 Status | Description |
|------|----------------|
| OFF  | Motor spin direction is "positive"  |
| ON  | Motor spin direction is "negative"   |
||

| LED D17 Status | Description |
|------|----------------|
| OFF  | No fault  |
| ON   | Fault is detected  |
||