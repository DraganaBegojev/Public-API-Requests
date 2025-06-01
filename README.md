# Public API Requests
Project 5


# Improved Disabled Button Styling

    To enhance user experience and accessibility, styling was added to clearly indicate when modal navigation buttons (Prev/Next) are disabled.
        CSS Update:
            .btn:disabled {
            background-color: #ccc;
            color: #666;
            cursor: not-allowed;
            opacity: 0.6;}
            
    Purpose:
        - Makes it visually obvious when a button is disabled.
        - Prevents confusion by using a muted look and changing the cursor.
        - Ensures better accessibility feedback for all users.
        - This change supports a smoother interaction flow—especially when only one employee is displayed in filtered results and navigation buttons are not clickable.

# Hover Effect for Modal Close Button

    To improve usability, a hover style was added to the modal close button:
        .modal-close-btn:hover {
        background: rgba(151, 0, 0, 0.9);
        }
    This adds a dark red background when the user hovers over the "X" button, providing clear visual feedback.