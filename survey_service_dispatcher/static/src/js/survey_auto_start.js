import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.SurveyAutoStart = publicWidget.Widget.extend({
    selector: '.o_survey_start', // Targets your specific div class

    start: function () {
        const self = this;
        setTimeout(function() {
            const triggerBtn = self.el.querySelector('#survey_auto_start_trigger');
            if (triggerBtn && triggerBtn.closest('form')) {
                triggerBtn.click();
            }
        }, 200);
        return this._super.apply(this, arguments);
    },
});
