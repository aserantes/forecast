export const k2c = (k) => `${Math.round(k - 273.15)}°C`;

export const k2f = (k) => `${Math.round(((k - 273.15) * 9) / 5 + 32)}°F`;

export const getTempLevel = (k) => {
  const celcius = Math.round(k - 273.15);

  if (celcius < 0) {
    return {
      id: 1,
      name: 'Freezing',
      color: 'primary.light',
      path:
        'm 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,2 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0'
    };
  }
  if (celcius > 0 && celcius < 10) {
    return {
      id: 2,
      name: 'Cold',
      color: 'primary.light',
      path:
        'm 16,32 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,-2 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.656854 1.343146,-3 3,-3 1.656854,0 3,1.343146 3,3 0,1.656854 -1.343146,3 -3,3 z m 0,0'
    };
  }
  if (celcius > 10 && celcius < 20) {
    return {
      id: 3,
      name: 'Cool',
      color: 'primary.light',
      path:
        'm 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.31085 0.840738,-2.425335 2.012406,-2.833649 C 15.004239,23.115176 15,23.062694 15,23.009222 V 18.990778 C 15,18.450975 15.447715,18 16,18 c 0.556135,0 1,0.443586 1,0.990778 v 4.018444 c 0,0.05332 -0.0044,0.105767 -0.01277,0.157002 C 18.159087,23.574432 19,24.689013 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0'
    };
  }
  if (celcius > 20 && celcius < 30) {
    return {
      id: 4,
      name: 'Warm',
      color: 'secondary.light',
      path:
        'm 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.311415 0.841462,-2.426295 2.01392,-2.834176 C 15.004763,23.111105 15,23.054878 15,22.997527 V 13.002473 C 15,12.455761 15.447715,12 16,12 c 0.556135,0 1,0.448823 1,1.002473 v 9.995054 c 0,0.05719 -0.0049,0.113383 -0.0143,0.168164 C 18.158354,23.573461 19,24.688442 19,26 c 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0'
    };
  }
  if (celcius > 30 && celcius < 40) {
    return {
      id: 5,
      name: 'Hot',
      color: 'secondary.light',
      path:
        'm 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 7.9933977 C 15,7.4449463 15.447715,7 16,7 c 0.556135,0 1,0.4447593 1,0.9933977 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0'
    };
  }
  if (celcius > 40) {
    return {
      id: 6,
      name: 'Blazing',
      color: 'secondary.light',
      path:
        'm 16,30 c 2.209139,0 4,-1.790861 4,-4 0,-1.480566 -0.804398,-2.773254 -2,-3.464871 V 4.0049466 C 18,2.8976452 17.11227,2 16,2 14.895431,2 14,2.8970262 14,4.0049466 V 22.535129 C 12.804398,23.226746 12,24.519434 12,26 c 0,2.209139 1.790861,4 4,4 z m 0,-1 c -1.656854,0 -3,-1.343146 -3,-3 0,-1.306218 0.834806,-2.417456 2,-2.829294 V 4.0024617 C 15,3.4394583 15.447715,3 16,3 c 0.556135,0 1,0.4488174 1,1.0024617 V 23.170706 c 1.165194,0.411838 2,1.523076 2,2.829294 0,1.656854 -1.343146,3 -3,3 z m 0,3 c -3.313709,0 -6,-2.686291 -6,-6 0,-1.777005 0.772506,-3.373582 2,-4.472213 V 4.0055202 C 12,1.7870853 13.790861,0 16,0 c 2.204644,0 4,1.7933325 4,4.0055202 V 21.527787 c 1.227494,1.098631 2,2.695208 2,4.472213 0,3.313709 -2.686291,6 -6,6 z m 0,0'
    };
  }
  return { id: 0, name: 'error', color: 'warning', path: '' };
};
