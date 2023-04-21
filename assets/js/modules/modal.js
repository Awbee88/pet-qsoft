import fancybox from "@fancyapps/fancybox";

function modal() {

    $.fancybox.defaults.btnTpl = {
        smallBtn:
            '<div data-fancybox-close class="fancybox-close"><svg class="fancybox-close-icon icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.41425 6.00001L11.7072 1.70701C12.0982 1.31601 12.0982 0.684006 11.7072 0.293006C11.3162 -0.0979941 10.6842 -0.0979941 10.2933 0.293006L6.00025 4.58601L1.70725 0.293006C1.31625 -0.0979941 0.68425 -0.0979941 0.29325 0.293006C-0.09775 0.684006 -0.09775 1.31601 0.29325 1.70701L4.58625 6.00001L0.29325 10.293C-0.09775 10.684 -0.09775 11.316 0.29325 11.707C0.48825 11.902 0.74425 12 1.00025 12C1.25625 12 1.51225 11.902 1.70725 11.707L6.00025 7.41401L10.2933 11.707C10.4882 11.902 10.7443 12 11.0002 12C11.2562 12 11.5122 11.902 11.7072 11.707C12.0982 11.316 12.0982 10.684 11.7072 10.293L7.41425 6.00001Z" fill="currentColor"/></svg></div>',
    };

    $.fancybox.defaults.hash = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.smallBtn = true;
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.hideScrollbar = true;
    $.fancybox.defaults.fullScreen = false;
    $.fancybox.defaults.backFocus = false;
    $.fancybox.defaults.keyboard = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.loop = false;

    $('[data-modal-type="modal"]').fancybox({
        baseClass: "modal",
    });
}

export default modal;