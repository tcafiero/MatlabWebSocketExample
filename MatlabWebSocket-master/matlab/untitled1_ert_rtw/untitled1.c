/*
 * Student License - for use by students to meet course requirements and
 * perform academic research at degree granting institutions only.  Not
 * for government, commercial, or other organizational use.
 *
 * File: untitled1.c
 *
 * Code generated for Simulink model 'untitled1'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Mon Nov 21 13:11:24 2016
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Atmel->AVR
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 * Validation result: Not run
 */

#include "untitled1.h"

/* Named constants for Chart: '<Root>/Chart' */
#define IN_State1                      ((uint8_T)1U)
#define IN_State2                      ((uint8_T)2U)

/* Private macros used by the generated code to access rtModel */
#ifndef rtmIsMajorTimeStep
# define rtmIsMajorTimeStep(rtm)       (((rtm)->Timing.simTimeStep) == MAJOR_TIME_STEP)
#endif

#ifndef rtmIsMinorTimeStep
# define rtmIsMinorTimeStep(rtm)       (((rtm)->Timing.simTimeStep) == MINOR_TIME_STEP)
#endif

#ifndef rtmGetTPtr
# define rtmGetTPtr(rtm)               ((rtm)->Timing.t)
#endif

#ifndef rtmSetTPtr
# define rtmSetTPtr(rtm, val)          ((rtm)->Timing.t = (val))
#endif

/* Block signals and states (auto storage) */
DW rtDW;

/* Real-time model */
RT_MODEL rtM_;
RT_MODEL *const rtM = &rtM_;

/* Model step function */
void untitled1_step(void)
{
  real_T SineWave;

  /* Sin: '<Root>/Sine Wave' */
  SineWave = sin(rtM->Timing.t[0]);

  /* Chart: '<Root>/Chart' */
  /* Gateway: Chart */
  /* During: Chart */
  if (rtDW.is_active_c3_untitled1 == 0U) {
    /* Entry: Chart */
    rtDW.is_active_c3_untitled1 = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:4' */
    rtDW.is_c3_untitled1 = IN_State1;

    /* Entry 'State1': '<S1>:2' */
    /* State Name */
    /* '<S1>:2:1' y = -1; */
    /*  entry action */
    /*  during: */
  } else if (rtDW.is_c3_untitled1 == IN_State1) {
    /* During 'State1': '<S1>:2' */
    /* '<S1>:5:1' sf_internal_predicateOutput = ... */
    /* '<S1>:5:1' u <= 0; */
    if (SineWave <= 0.0) {
      /* Transition: '<S1>:5' */
      /*  [transition condition]{action} */
      rtDW.is_c3_untitled1 = IN_State2;

      /* Entry 'State2': '<S1>:3' */
      /* '<S1>:3:1' y = 1; */
    }
  } else {
    /* During 'State2': '<S1>:3' */
    /* '<S1>:6:1' sf_internal_predicateOutput = ... */
    /* '<S1>:6:1' u > 0; */
    if (SineWave > 0.0) {
      /* Transition: '<S1>:6' */
      rtDW.is_c3_untitled1 = IN_State1;

      /* Entry 'State1': '<S1>:2' */
      /* State Name */
      /* '<S1>:2:1' y = -1; */
      /*  entry action */
      /*  during: */
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Update absolute time for base rate */
  /* The "clockTick0" counts the number of times the code of this task has
   * been executed. The absolute time is the multiplication of "clockTick0"
   * and "Timing.stepSize0". Size of "clockTick0" ensures timer will not
   * overflow during the application lifespan selected.
   */
  rtM->Timing.t[0] =
    (++rtM->Timing.clockTick0) * rtM->Timing.stepSize0;

  {
    /* Update absolute timer for sample time: [0.1s, 0.0s] */
    /* The "clockTick1" counts the number of times the code of this task has
     * been executed. The resolution of this integer timer is 0.1, which is the step size
     * of the task. Size of "clockTick1" ensures timer will not overflow during the
     * application lifespan selected.
     */
    rtM->Timing.clockTick1++;
  }
}

/* Model initialize function */
void untitled1_initialize(void)
{
  /* Registration code */
  {
    /* Setup solver object */
    rtsiSetSimTimeStepPtr(&rtM->solverInfo, &rtM->Timing.simTimeStep);
    rtsiSetTPtr(&rtM->solverInfo, &rtmGetTPtr(rtM));
    rtsiSetStepSizePtr(&rtM->solverInfo, &rtM->Timing.stepSize0);
    rtsiSetErrorStatusPtr(&rtM->solverInfo, ((const char_T **)
      (&rtmGetErrorStatus(rtM))));
    rtsiSetRTModelPtr(&rtM->solverInfo, rtM);
  }

  rtsiSetSimTimeStep(&rtM->solverInfo, MAJOR_TIME_STEP);
  rtsiSetSolverName(&rtM->solverInfo,"FixedStepDiscrete");
  rtmSetTPtr(rtM, &rtM->Timing.tArray[0]);
  rtM->Timing.stepSize0 = 0.1;
}

/* Model terminate function */
void untitled1_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
