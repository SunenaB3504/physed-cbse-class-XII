# Gap Analysis: Unit 8 (Biomechanics & Sports)

## 1. Executive Summary
**CRITICAL GAPS DETECTED.**
The current implementation of Unit 8 is missing approximately **50% of the required curriculum** as defined by the Master Verification File. While "Newton's Laws", "Friction", and "Projectile Motion" are well-covered, the foundational anatomical biomechanics (Planes, Axes, Movements) are **completely absent**.

## 2. Topic-by-Topic Verification

| Master File Topic | Current Implementation | Status | Notes |
| :--- | :--- | :--- | :--- |
| **8.2.1 Movement & Locomotion** | | | |
| Definition of Movement | ❌ **MISSING** | **Critical** | Fundamental definition absent. |
| Definition of Locomotion | ❌ **MISSING** | **Critical** | Distinction from movement absent. |
| **8.2.2 Planes & Axes** | | | |
| Sagittal Plane | ❌ **MISSING** | **Critical** | No mention of dividing body left/right. |
| Frontal (Coronal) Plane | ❌ **MISSING** | **Critical** | No mention of dividing body front/back. |
| Transverse (Horizontal) Plane | ❌ **MISSING** | **Critical** | No mention of dividing body top/bottom. |
| Sagittal Axis | ❌ **MISSING** | **Critical** | |
| Frontal Axis | ❌ **MISSING** | **Critical** | |
| Vertical Axis | ❌ **MISSING** | **Critical** | |
| **8.2.3 Types of Movement** | | | |
| Flexion & Extension | ❌ **MISSING** | **Critical** | Angular movements not defined. |
| Abduction & Adduction | ❌ **MISSING** | **Critical** | Sideways movements not defined. |
| **8.3 Newton's Laws** | ✅ **Present** | Good | All 3 laws covered well. |
| **8.4 Friction** | ⚠️ **Partial** | Warning | Types are listed, but **Coefficient of Friction (COF)** formula is missing. |
| **8.5 Equilibrium / CG** | ✅ **Present** | Good | Static/Dynamic and Stability principles covered. |
| **Projectile Motion** | ✅ **Present** | Good | Factors and Trajectory covered. |

## 3. Flashcard & Cheat Sheet Audit

**Missing High-Value Content:**
*   **Formulas:** Coefficient of Friction ($F = \mu N$) is missing.
*   **Mnemonics:** "Abduction = Take Away", "Adduction = Add" are missing.
*   **concept Pairings:** The critical "Plane vs Axis" relationships (e.g., Sagittal Plane rotates around Frontal Axis) are absent. This is a common MCQ target.

**Existing Matches:**
*   Newton's Laws and formulas are correct.
*   Static vs Rolling friction is correct.

## 4. SQP Question Alignment
*   **Levers:** The Master File notes an SQP question on Levers (2025-26 Q37), but acknowledges it's "Not in text". Current implementation also excludes it. *Recommendation: Add a brief "Note" or remediation for Levers if strictly following SQP, but for now we follow the text.*
*   **Friction & Newton:** Alignment is good for existing topics.

## 5. Recommendations
1.  **Create New Topic:** Insert a new topic object at the **start** of the `topics` array in `unit8.ts` titled "Biomechanics Basics" covering:
    *   Measurement & Locomotion.
    *   Planes & Axes (Definitions & Intersections).
    *   Types of Movement (Flexion/Extension/Abd/Add).
2.  **Enhance Friction Topic:** Add the "Coefficient of Friction" definition and formula to the Friction content.
3.  **Update Cheat Sheet/Flashcards:** Add the missing Plane-Axis definitions and movement mnemonics.
4.  **Visualizations:** Add a table mapping "Plane -> Axis -> Movement Example" (e.g., Sagittal -> Frontal Axis -> Walking).

## 6. Conclusion
The unit requires a **major upgrade** to include the Anatomical/Physiological aspect of Biomechanics. Currently, it is purely Physics-focussed.
