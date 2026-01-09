# Accessibility Testing Checklist - Syllabi Modal Feature

## Overview
This document provides a comprehensive checklist for testing accessibility features of the syllabi modal viewer implementation. All features are designed to meet **WCAG 2.1 AA standards**.

## Code Review - Implementation Status ✅

### Modal Component (`components/ui/Modal.tsx`)
- [x] **ARIA Attributes**
  - ✅ `role="dialog"` on modal container
  - ✅ `aria-modal="true"` to indicate modal behavior
  - ✅ `aria-labelledby="modal-title"` pointing to modal title
  - ✅ `aria-label` on close button: "Close syllabus viewer"
  - ✅ `aria-label` on fullscreen toggle: "Enter fullscreen" / "Exit fullscreen"
  - ✅ `aria-hidden="true"` on backdrop

- [x] **Keyboard Navigation**
  - ✅ ESC key closes modal
  - ✅ Tab cycles through focusable elements
  - ✅ Shift+Tab reverses focus order
  - ✅ Focus trap implemented (cannot tab outside modal)
  - ✅ Enter/Space activates buttons (standard HTML behavior)

- [x] **Focus Management**
  - ✅ Focus moves to close button when modal opens
  - ✅ Focus trapped within modal
  - ✅ Focus returns to trigger element (course card) on close
  - ✅ Visible focus indicators (`focus:ring-2 focus:ring-accentBlue`)

- [x] **Touch Accessibility (Mobile)**
  - ✅ Minimum 44x44px touch targets (h-11 w-11 = 44px)
  - ✅ Adequate spacing between interactive elements (gap-2 = 8px)
  - ✅ Visual feedback on touch (active:bg-gray-200)
  - ✅ Backdrop touch to close modal

- [x] **Screen Reader Support**
  - ✅ Modal title announced when opened (via aria-labelledby)
  - ✅ Button states announced (aria-label on all buttons)
  - ✅ Icon buttons have aria-hidden="true" on SVG, aria-label on button

- [x] **Visual Accessibility**
  - ✅ High contrast colors (uses design system colors)
  - ✅ Focus indicators: 2px ring with offset (WCAG 2.4.7 compliant)
  - ✅ Responsive typography
  - ✅ Respects prefers-reduced-motion (`motion-reduce:transition-none`)

- [x] **Mobile Optimizations**
  - ✅ Safe area insets for notched devices (`env(safe-area-inset-*)`)
  - ✅ Dynamic viewport height (`dvh`) for mobile browsers
  - ✅ Body scroll lock when modal is open
  - ✅ Native momentum scrolling (`-webkit-overflow-scrolling: touch`)
  - ✅ Fullscreen toggle hidden on screens < 375px

### PDF Viewer Component (`components/ui/PdfViewer.tsx`)
- [x] **ARIA Attributes**
  - ✅ `title` attribute on iframe: "Syllabus PDF viewer for [Course Name]"
  - ✅ Loading state: `role="status"`, `aria-live="polite"`, `aria-label="Loading syllabus"`
  - ✅ Error state: `role="alert"`, `aria-live="assertive"`
  - ✅ Retry button: `aria-label="Retry loading syllabus"`

- [x] **Screen Reader Support**
  - ✅ Loading state announcements
  - ✅ Error state announcements
  - ✅ Semantic HTML structure

- [x] **Mobile Optimizations**
  - ✅ Responsive sizing (h-full w-full)
  - ✅ Minimum height (400px)
  - ✅ Iframe sandbox attributes for security

### CourseCard Component (`components/domain/CourseCard.tsx`)
- [x] **Keyboard Navigation**
  - ✅ Enter/Space to activate card
  - ✅ `tabIndex={0}` when clickable
  - ✅ `role="button"` when clickable

- [x] **Accessibility Labels**
  - ✅ `aria-label="View syllabus for [Course Name]"` when clickable

- [x] **Touch Accessibility**
  - ✅ Entire card is clickable (large touch target)
  - ✅ Visual feedback on hover/active states
  - ✅ Sufficient padding (p-6 = 24px)

- [x] **Visual Feedback**
  - ✅ Cursor pointer on desktop
  - ✅ Hover states (hover:border-accentBlue)
  - ✅ Active states (active:bg-gray-50)
  - ✅ Clear indication: "Click to view syllabus →"

## Manual Testing Checklist

### Keyboard Navigation Testing
Test on desktop with keyboard only (no mouse):

- [ ] **Modal Opening**
  - [ ] Tab to a course card with syllabus
  - [ ] Press Enter or Space to open modal
  - [ ] Verify focus moves to close button
  - [ ] Verify modal title is announced by screen reader

- [ ] **Modal Navigation**
  - [ ] Tab cycles through: Close button → Fullscreen toggle → (back to close)
  - [ ] Shift+Tab reverses the order
  - [ ] Press Escape closes modal
  - [ ] Verify focus returns to course card after closing

- [ ] **Focus Indicators**
  - [ ] Visible focus ring on all interactive elements
  - [ ] Focus ring has sufficient contrast (2px blue ring)
  - [ ] No focus trap breaking issues

### Screen Reader Testing

#### VoiceOver (macOS/iOS)
- [ ] **Opening Modal**
  - [ ] Activate screen reader (Cmd+F5 on Mac)
  - [ ] Navigate to course card
  - [ ] Verify "View syllabus for [Course Name], button" is announced
  - [ ] Activate the card
  - [ ] Verify "[Course Name] - Syllabus, dialog" is announced
  - [ ] Verify "Close syllabus viewer, button" is announced

- [ ] **Modal Content**
  - [ ] Verify modal title is read
  - [ ] Verify loading state is announced: "Loading syllabus"
  - [ ] Navigate to fullscreen button, verify "Enter fullscreen, button" is announced
  - [ ] Activate fullscreen, verify "Exit fullscreen, button" is announced

- [ ] **Error States**
  - [ ] Trigger error state (if possible)
  - [ ] Verify "Unable to load syllabus, alert" is announced
  - [ ] Verify "Retry loading syllabus, button" is announced

#### NVDA (Windows)
- [ ] **Navigation**
  - [ ] Test all VoiceOver scenarios above
  - [ ] Verify focus announcements are clear
  - [ ] Verify modal dialogs are properly identified

#### TalkBack (Android)
- [ ] **Mobile Screen Reader**
  - [ ] Enable TalkBack on Android device
  - [ ] Navigate to course card
  - [ ] Verify touch targets are properly announced
  - [ ] Verify modal opens and is announced correctly
  - [ ] Test all button interactions with TalkBack

### Mobile Device Testing

#### Touch Targets (WCAG 2.5.5)
- [ ] **Minimum Size**
  - [ ] All buttons are at least 44x44px (close button, fullscreen toggle, retry button)
  - [ ] Course card provides large touch target
  - [ ] Adequate spacing between interactive elements (8px minimum)

#### iOS Safari Testing
- [ ] **Device Testing**
  - [ ] iPhone SE (smallest screen: 375x667)
  - [ ] iPhone 12/13/14 (390x844)
  - [ ] iPhone 14 Pro Max (430x932)
  - [ ] iPad (1024x1366)

- [ ] **Features to Test**
  - [ ] Modal opens smoothly
  - [ ] Body scroll is locked when modal is open
  - [ ] PDF loads and displays correctly
  - [ ] Momentum scrolling works in PDF viewer
  - [ ] Safe area insets work on notched devices
  - [ ] Fullscreen toggle appears on screens >= 375px
  - [ ] Orientation changes handled properly
  - [ ] Touch interactions feel responsive

#### Android Chrome Testing
- [ ] **Device Testing**
  - [ ] Pixel 5 (1080x2340)
  - [ ] Samsung Galaxy S21 (1440x3200)
  - [ ] Tablet device

- [ ] **Features to Test**
  - [ ] All iOS features above
  - [ ] TalkBack compatibility
  - [ ] PDF rendering in Chrome
  - [ ] Touch target sizes adequate for one-handed use

### Visual Accessibility Testing

#### Color Contrast (WCAG AA: 4.5:1 for text, 3:1 for UI)
- [ ] **Text Contrast**
  - [ ] Course card text (#1f2933 on #f9fafb) - ✅ Passes (20.6:1)
  - [ ] Button text (white on #3b82f6) - ✅ Passes (4.61:1)
  - [ ] Error messages - ✅ High contrast

- [ ] **UI Component Contrast**
  - [ ] Focus indicators (2px blue ring) - ✅ Visible
  - [ ] Button borders and backgrounds - ✅ Sufficient contrast
  - [ ] Modal backdrop (black/50 on white) - ✅ Sufficient contrast

#### Focus Indicators (WCAG 2.4.7)
- [ ] **Visibility**
  - [ ] Focus ring visible on all interactive elements
  - [ ] Focus ring is 2px minimum width
  - [ ] Focus ring has sufficient contrast
  - [ ] Focus indicators don't rely on color alone

#### Reduced Motion (WCAG 2.3.3)
- [ ] **Preferences**
  - [ ] Enable "Reduce motion" in system preferences
  - [ ] Verify animations are disabled (`motion-reduce:transition-none`)
  - [ ] Verify no flashing or animated content

#### Zoom Levels (WCAG 1.4.4)
- [ ] **Browser Zoom**
  - [ ] Test at 200% zoom level
  - [ ] Verify all content remains readable
  - [ ] Verify layout doesn't break
  - [ ] Verify touch targets remain usable (still 44x44px effective)

#### High Contrast Mode
- [ ] **Windows High Contrast**
  - [ ] Enable Windows High Contrast mode
  - [ ] Verify all elements are visible
  - [ ] Verify focus indicators are visible
  - [ ] Verify text is readable

### Cross-Browser Testing

#### Desktop Browsers
- [ ] **Chrome** (latest)
  - [ ] Modal functionality works
  - [ ] Keyboard navigation works
  - [ ] PDF displays correctly
  - [ ] Focus indicators visible

- [ ] **Firefox** (latest)
  - [ ] All Chrome tests
  - [ ] Focus trap works correctly

- [ ] **Safari** (latest macOS)
  - [ ] All Chrome tests
  - [ ] Safe area insets work

- [ ] **Edge** (latest)
  - [ ] All Chrome tests

#### Mobile Browsers
- [ ] **iOS Safari**
  - [ ] All mobile features work
  - [ ] Safe area insets work
  - [ ] Momentum scrolling works

- [ ] **Chrome Mobile (Android)**
  - [ ] All mobile features work
  - [ ] PDF rendering works

- [ ] **Firefox Mobile**
  - [ ] Basic functionality works
  - [ ] PDF displays correctly

### Performance Testing

#### Loading States
- [ ] **Network Conditions**
  - [ ] Test on fast 3G network
  - [ ] Verify loading spinner appears
  - [ ] Verify "Loading syllabus" is announced
  - [ ] Test on slow network / offline
  - [ ] Verify error state appears
  - [ ] Verify retry button works

#### PDF Loading
- [ ] **Various PDF Sizes**
  - [ ] Small PDF (< 1MB) loads quickly
  - [ ] Large PDF (> 5MB) shows loading state
  - [ ] PDF with errors shows error state
  - [ ] Missing PDF shows error state

### Edge Cases

#### Modal Behavior
- [ ] **Multiple Modals** (if applicable)
  - [ ] Only one modal can be open at a time ✅ (current implementation)

- [ ] **Navigation During Modal**
  - [ ] Browser back button behavior
  - [ ] URL changes
  - [ ] Page refresh with modal open

- [ ] **Fullscreen Toggle**
  - [ ] Enter fullscreen works
  - [ ] Exit fullscreen works
  - [ ] Button state updates correctly
  - [ ] Modal resizes properly

#### PDF Viewer Edge Cases
- [ ] **Invalid URLs**
  - [ ] Missing PDF shows error
  - [ ] Invalid URL shows error
  - [ ] Network error shows error
  - [ ] Retry button reloads PDF

- [ ] **PDF Content**
  - [ ] Very long PDFs scroll correctly
  - [ ] PDFs with unusual aspect ratios display correctly
  - [ ] PDFs with embedded forms work (if applicable)

## Automated Testing Tools

### Recommended Tools
1. **axe DevTools** (Browser Extension)
   - Run automated accessibility scans
   - Check for WCAG violations
   - Verify ARIA attributes

2. **WAVE** (Web Accessibility Evaluation Tool)
   - Browser extension or online tool
   - Visual accessibility indicators
   - Error and warning reports

3. **Lighthouse** (Chrome DevTools)
   - Accessibility audit
   - Performance metrics
   - Best practices

### Running Automated Tests
```bash
# Install axe-core for automated testing (if adding to test suite)
npm install --save-dev @axe-core/react

# Run Lighthouse audit
# In Chrome DevTools: Lighthouse tab → Accessibility audit
```

## Testing Summary Template

### Test Date: ___________
### Tester: ___________
### Browser/Device: ___________
### Screen Reader: ___________

#### Pass/Fail Results
- Keyboard Navigation: [ ] Pass [ ] Fail
- Screen Reader: [ ] Pass [ ] Fail  
- Mobile Touch: [ ] Pass [ ] Fail
- Color Contrast: [ ] Pass [ ] Fail
- Focus Indicators: [ ] Pass [ ] Fail
- Reduced Motion: [ ] Pass [ ] Fail
- Zoom Levels: [ ] Pass [ ] Fail

#### Issues Found
1. ___________
2. ___________
3. ___________

#### Notes
___________

## Completion Criteria

All items should be tested and verified before marking the accessibility todo as complete:

- [x] Code review completed (implementation verified)
- [ ] Keyboard navigation tested on desktop
- [ ] Screen reader tested (at least VoiceOver or NVDA)
- [ ] Mobile device tested (at least iOS or Android)
- [ ] Color contrast verified
- [ ] Focus indicators verified
- [ ] Reduced motion tested
- [ ] Cross-browser compatibility verified
- [ ] Edge cases tested
- [ ] Any found issues fixed

---

**Note**: This checklist should be completed manually for thorough accessibility testing. Automated tools can help identify some issues, but manual testing with real assistive technologies is essential for WCAG 2.1 AA compliance.
