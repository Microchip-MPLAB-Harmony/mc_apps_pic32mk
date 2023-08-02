/*******************************************************************************
  System Definitions

  File Name:
    mc_flying_start.h

  Summary:
    Header file which contains variables and function prototypes for flying start

  Description:
    This file contains variables and function prototypes which are generally used for flying
    start.

 *******************************************************************************/

//DOM-IGNORE-BEGIN
/*******************************************************************************
* Copyright (C) 2022 Microchip Technology Inc. and its subsidiaries.
*
* Subject to your compliance with these terms, you may use Microchip software
* and any derivatives exclusively with Microchip products. It is your
* responsibility to comply with third party license terms applicable to your
* use of third party software (including open source software) that may
* accompany Microchip software.
*
* THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER
* EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED
* WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A
* PARTICULAR PURPOSE.
*
* IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
* INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND
* WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS
* BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE
* FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN
* ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY,
* THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
 *******************************************************************************/
//DOM-IGNORE-END

#ifndef MCFLY_H
#define MCFLY_H

/*******************************************************************************
 * Header inclusions
*******************************************************************************/
#include "mc_types.h"
#include "mc_hardware_abstraction.h"


/*******************************************************************************
 Configuration parameters
*******************************************************************************/

/*******************************************************************************
Type Definition
*******************************************************************************/
typedef struct
{
    float32_t dt;
    float32_t detectTime;
    float32_t minRpmForFlyingStart;
    float32_t fadeOutTime;
    float32_t fadeOutBurstTime;
    uint16_t pwmPeriodCount;
    void * pStatePointer;
}tmcFly_Parameters_s;

/*******************************************************************************
 * Interface variables
*******************************************************************************/

/*******************************************************************************
 Static Interface Functions
*******************************************************************************/
/*! \brief Set module parameters
 *
 * Details.
 * Set module parameters
 *
 * @param[in]: Input structure
 * @param[in/out]: State structure
 * @param[out]: Output structure
 * @return: None
 */
__STATIC_INLINE void mcFlyI_ParametersSet( tmcFly_Parameters_s * const pParameter )
{
    pParameter->dt = (float32_t)(0.00005);
    pParameter->detectTime = (float32_t)(2);
    pParameter->minRpmForFlyingStart = (float32_t)(500);

    pParameter->fadeOutTime = (float32_t)(2);
    pParameter->fadeOutBurstTime = (float32_t)(0.02);
    pParameter->pwmPeriodCount = (uint16_t)mcHalI_PwmPeriodGet();

}

/*******************************************************************************
 Interface Functions
*******************************************************************************/
/*! \brief Initialize flying Start module
 *
 * Details.
 * Initialize flying Start module
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void  mcFlyI_FlyingStartInit( tmcFly_Parameters_s * const pParameters );

/*! \brief Enable flying Start module
 *
 * Details.
 * Enable flying Start module
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void  mcFlyI_FlyingStartEnable( tmcFly_Parameters_s * const pParameters );

/*! \brief Disable flying Start module
 *
 * Details.
 * Disable flying Start module
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void  mcFlyI_FlyingStartDisable( tmcFly_Parameters_s * const pParameters );

/*! \brief Flying Start
 *
 * Details.
 * Flying Start
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
tmcTypes_StdReturn_e  mcFlyI_FlyingStart( tmcFly_Parameters_s * const pParameters,
                               const float32_t speed, const float32_t commandDirection,
                               float32_t * const pIdref, float32_t * const pIqref,
                               bool * const pDutyOverride, int16_t * const pDuty );

/*! \brief Reset Flying Start
 *
 * Details.
 * Reset Flying Start
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return:
 */
void mcFlyI_FlyingStartReset( const tmcFly_Parameters_s * const pParameters );

#endif // MCFLY_H
