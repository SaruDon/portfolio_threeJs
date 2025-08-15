// useFrame is a React Three Fiber hook that runs on every frame (60fps)
// It provides access to the Three.js state and delta time for smooth animations
useFrame((state, delta) => {
  /**
   * CAMERA POSITION ANIMATION
   * ------------------------
   * easing.damp3() smoothly animates the camera to a target position
   *
   * Parameters:
   * - state.camera.position: Current camera position (Vector3)
   * - [0, 0, 20]: Target position (x=0, y=0, z=20)
   * - 0.25: Damping factor (0-1, lower = slower/smoother)
   * - delta: Frame time difference for frame-rate independent animation
   */
  easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

  /**
   * MOUSE-CONTROLLED ROTATION (Desktop Only)
   * ----------------------------------------
   * Only apply mouse movement on desktop devices for better UX
   */
  if (!isMobile) {
    /**
     * easing.dampE() smoothly rotates the group based on mouse position
     *
     * Parameters:
     * - groupRef.current.rotation: Current rotation (Euler angles)
     * - Target rotation array: [x, y, z] in radians
     *   • state.pointer.y / 3: Vertical mouse movement controls X-axis rotation
     *   • state.pointer.y / 5: Vertical mouse movement controls Y-axis rotation
     *   • 0: No Z-axis rotation (prevents rolling)
     * - 0.25: Damping factor (same as camera animation)
     * - delta: Frame time for smooth animation
     *
     * Mouse coordinate system:
     * - state.pointer.x: Horizontal mouse position (-1 to 1, left to right)
     * - state.pointer.y: Vertical mouse position (-1 to 1, bottom to top)
     *
     * Division factors (3 and 5) control rotation sensitivity:
     * - Larger numbers = less sensitive/subtle movement
     * - Smaller numbers = more sensitive/dramatic movement
     */
    easing.dampE(
      groupRef.current.rotation,
      [
        state.pointer.y / 3, // X rotation: mouse up/down tilts object forward/back
        state.pointer.y / 5, // Y rotation: mouse up/down also rotates left/right (subtle)
        0, // Z rotation: no rolling motion
      ],
      0.25, // Smooth damping
      delta // Frame-independent timing
    );
  }
});

/**
 * POTENTIAL ISSUE IN YOUR CODE:
 * -----------------------------
 * You're using `state.pointer.y` for BOTH X and Y rotation!
 * This means only vertical mouse movement affects rotation.
 *
 * SUGGESTED FIX:
 * [
 *   -state.pointer.y / 3,  // X rotation: mouse up/down (negative for natural feel)
 *   state.pointer.x / 5,   // Y rotation: mouse left/right
 *   0
 * ]
 *
 * This would give you proper 3D mouse tracking:
 * - Move mouse up/down → object tilts forward/backward
 * - Move mouse left/right → object rotates left/right
 */
