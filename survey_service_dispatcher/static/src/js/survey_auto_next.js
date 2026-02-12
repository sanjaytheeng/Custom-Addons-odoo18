/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

// We create a new widget that attaches to the survey form container
publicWidget.registry.SurveyAutoNext = publicWidget.Widget.extend({
    selector: '.o_survey_form', // Targets the main form
    events: {
        'change input[type="radio"]': '_onRadioChange',
    },

    /**
     * This method runs when the widget is initialized.
     */
    start: function () {
        console.log(">> Survey Auto Next: Module Loaded Successfully");
        return this._super.apply(this, arguments);
    },

    /**
     * Handle radio button clicks
     */
    _onRadioChange: function (ev) {
        const $target = $(ev.currentTarget);

        // Find the wrapper of this question to check its type
        const $questionWrapper = $target.closest('.o_survey_answer_wrapper');
        const questionType = $questionWrapper.data('question-type');

        console.log(">> Question Type Detected:", questionType);

        // ONLY trigger for 'simple_choice_radio'
        // This prevents it from triggering on Matrix questions or Multiple Choice checkboxes
        if (questionType === 'simple_choice_radio') {

            console.log(">> Auto-advancing in 400ms...");

            // 400ms delay for visual feedback
            setTimeout(() => {
                // Find the navigation buttons
                const $nextBtn = $('.o_survey_navigation_wrapper button[value="next"]');
                const $submitBtn = $('.o_survey_navigation_wrapper button[value="finish"]');

                // Click Next if available, otherwise click Submit/Finish
                if ($nextBtn.length && !$nextBtn.hasClass('d-none') && !$nextBtn.prop('disabled')) {
                    $nextBtn.click();
                } else if ($submitBtn.length && !$submitBtn.hasClass('d-none') && !$submitBtn.prop('disabled')) {
                    $submitBtn.click();
                }
            }, 400);
        }
    },
});