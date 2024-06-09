import React from 'react';
import '../Styles/LandingPage.css';
import x from '../Images/X logo.png'
import discord from '../Images/Discord logo.png'
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from 'react';


const LandingPage = ({showDisclaimer}) => {
    const navigate = useNavigate();
    const [roomText, setRoomText] = useState('NO. OF ROOMS ACTIVE:');
    const [fundsText, setFundsText] = useState('FUNDS ENTERED:');

    const updateText = () => {
        if (window.innerWidth <= 600) {
            setRoomText('ROOMS ACTIVE:');
            setFundsText('FUNDS:');
        } else {
            setRoomText('NO. OF ROOMS ACTIVE:');
            setFundsText('FUNDS ENTERED:');
        }
    };

    useEffect(() => {
        updateText();
        window.addEventListener('resize', updateText);
        return () => {
            window.removeEventListener('resize', updateText);
        };
    }, []);

    const handleDisclaimer = () => {
        showDisclaimer();
        navigate("/Home");
        
    }


    return (
        <div className="landing-container">
            <div className='logo'>
                <div className='logo-circle'>
                    <svg className='svg-circle' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 878 876" fill="none"> <g filter="url(#filter0_f_1_5165)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M439 811C645.555 811 813 643.555 813 437C813 230.446 645.555 63 439 63C232.446 63 65 230.446 65 437C65 643.555 232.446 811 439 811ZM439.001 739.927C606.303 739.927 741.928 604.302 741.928 437C741.928 269.698 606.303 134.073 439.001 134.073C271.699 134.073 136.074 269.698 136.074 437C136.074 604.302 271.699 739.927 439.001 739.927Z" fill="url(#paint0_linear_1_5165)"/> <path d="M812 437C812 643.002 645.002 810 439 810V812C646.107 812 814 644.107 814 437H812ZM439 64C645.002 64 812 230.998 812 437H814C814 229.893 646.107 62 439 62V64ZM66 437C66 230.998 232.998 64 439 64V62C231.893 62 64 229.893 64 437H66ZM439 810C232.998 810 66 643.002 66 437H64C64 644.107 231.893 812 439 812V810ZM740.928 437C740.928 603.75 605.75 738.927 439.001 738.927V740.927C606.855 740.927 742.928 604.854 742.928 437H740.928ZM439.001 135.073C605.75 135.073 740.928 270.25 740.928 437H742.928C742.928 269.146 606.855 133.073 439.001 133.073V135.073ZM137.074 437C137.074 270.25 272.251 135.073 439.001 135.073V133.073C271.147 133.073 135.074 269.146 135.074 437H137.074ZM439.001 738.927C272.251 738.927 137.074 603.75 137.074 437H135.074C135.074 604.854 271.147 740.927 439.001 740.927V738.927Z" fill="white"/> </g> <defs> <filter id="filter0_f_1_5165" x="0" y="-2" width="878" height="878" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_1_5165"/> </filter> <linearGradient id="paint0_linear_1_5165" x1="209.5" y1="111.5" x2="613" y2="735" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFE8BC"/> <stop offset="1" stop-color="#8A00BE" stop-opacity="0"/> </linearGradient> </defs> <g transform="translate(41.5, 41.5)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M397.5 794C616.481 794 794 616.481 794 397.5C794 178.519 616.481 1 397.5 1C178.519 1 1 178.519 1 397.5C1 616.481 178.519 794 397.5 794ZM397.501 718.651C574.868 718.651 718.652 574.867 718.652 397.5C718.652 220.133 574.868 76.3487 397.501 76.3487C220.134 76.3487 76.3496 220.133 76.3496 397.5C76.3496 574.867 220.134 718.651 397.501 718.651Z" fill="url(#paint0_linear_1_5168)"/> <path d="M793 397.5C793 615.929 615.929 793 397.5 793V795C617.033 795 795 617.033 795 397.5H793ZM397.5 2C615.929 2 793 179.071 793 397.5H795C795 177.967 617.033 0 397.5 0V2ZM2 397.5C2 179.071 179.071 2 397.5 2V0C177.967 0 0 177.967 0 397.5H2ZM397.5 793C179.071 793 2 615.929 2 397.5H0C0 617.033 177.967 795 397.5 795V793ZM717.652 397.5C717.652 574.315 574.315 717.651 397.501 717.651V719.651C575.42 719.651 719.652 575.419 719.652 397.5H717.652ZM397.501 77.3487C574.315 77.3487 717.652 220.685 717.652 397.5H719.652C719.652 219.581 575.42 75.3487 397.501 75.3487V77.3487ZM77.3496 397.5C77.3496 220.685 220.686 77.3487 397.501 77.3487V75.3487C219.582 75.3487 75.3496 219.581 75.3496 397.5H77.3496ZM397.501 717.651C220.686 717.651 77.3496 574.315 77.3496 397.5H75.3496C75.3496 575.419 219.582 719.651 397.501 719.651V717.651Z" fill="white"/> </g> <defs> <linearGradient id="paint0_linear_1_5168" x1="74.3637" y1="151.648" x2="794" y2="704.395" gradientUnits="userSpaceOnUse"> <stop stop-color="#FEBB3B"/> <stop offset="1" stop-color="#8A00BE"/> </linearGradient> </defs> </svg>
                    <svg className='circle-text' xmlns="http://www.w3.org/2000/svg" width="659" height="228" viewBox="0 0 659 228" fill="none"> <g filter="url(#filter0_di_358_74)"> <path d="M85.375 175.75C58.25 175.75 44.95 162.975 44.95 132.7V60.25H62.4499V86.5H85.375V101.9H62.4499V130.25C62.4499 151.775 70.5 159.825 85.375 159.825V175.75Z" fill="url(#paint0_linear_358_74)"/> <path d="M95.7068 174V86.5H113.207V105.225C117.932 92.45 129.832 84.75 144.357 84.75V101.9C131.407 101.9 114.257 109.95 113.207 137.425V174H95.7068Z" fill="url(#paint1_linear_358_74)"/> <path d="M180.978 175.75C163.653 175.75 152.103 162.975 152.103 139.35V86.5H169.603V134.625C169.603 150.025 174.678 159.825 186.753 159.825C197.953 159.825 208.103 149.5 208.103 128.5V86.5H225.603V174H208.103V160.7C201.278 171.025 190.778 175.75 180.978 175.75Z" fill="url(#paint2_linear_358_74)"/> <path d="M234.744 130.25C234.744 102.775 249.794 84.75 272.369 84.75C295.994 84.75 309.994 103.825 309.469 133.575H253.294C254.169 149.5 264.844 159.475 279.719 159.475C290.744 159.475 298.094 155.275 303.344 148.8V167.35C297.044 172.6 287.769 175.75 277.094 175.75C250.844 175.75 234.744 157.9 234.744 130.25ZM253.469 122.725H291.094C289.169 109.425 282.694 101.025 272.194 101.025C262.044 101.025 255.219 109.95 253.469 122.725Z" fill="url(#paint3_linear_358_74)"/> <path d="M347.953 174V42.75H365.453V174H347.953Z" fill="url(#paint4_linear_358_74)"/> <path d="M406.393 175.75C389.068 175.75 377.518 162.975 377.518 139.35V86.5H395.018V134.625C395.018 150.025 400.093 159.825 412.168 159.825C423.368 159.825 433.518 149.5 433.518 128.5V86.5H451.018V174H433.518V160.7C426.693 171.025 416.193 175.75 406.393 175.75Z" fill="url(#paint5_linear_358_74)"/> <path d="M460.159 130.25C460.159 103.475 476.959 84.75 501.459 84.75C511.609 84.75 518.959 88.075 524.384 92.1V111.35C519.309 104.875 512.484 100.85 503.209 100.85C488.684 100.85 478.359 113.625 478.359 130.25C478.359 146.875 488.684 159.65 503.559 159.65C512.659 159.65 519.484 156.325 524.384 149.675V169.1C518.959 173.3 511.784 175.75 501.634 175.75C476.959 175.75 460.159 157.025 460.159 130.25Z" fill="url(#paint6_linear_358_74)"/> <path d="M533.549 174V42.75H551.049V126.225L583.599 86.5H604.599L574.674 122.025L607.049 174H586.924L563.124 135.675L551.049 150.2V174H533.549Z" fill="url(#paint7_linear_358_74)"/> <path d="M85.375 176.872H86.4967V175.75V159.825V158.703H85.375C78.1389 158.703 72.7867 156.753 69.2004 152.396C65.5725 147.99 63.5717 140.911 63.5717 130.25V103.022H85.375H86.4967V101.9V86.5V85.3782H85.375H63.5717V60.25V59.1282H62.4499H44.95H43.8282V60.25V132.7C43.8282 147.974 47.1798 159.08 54.1823 166.356C61.1941 173.642 71.6563 176.872 85.375 176.872ZM94.585 174V175.122H95.7068H113.207H114.329V174V137.447C114.848 123.962 119.303 115.396 125.071 110.192C130.861 104.968 138.099 103.022 144.357 103.022H145.479V101.9V84.75V83.6282H144.357C131.279 83.6282 120.183 89.7142 114.329 100.126V86.5V85.3782H113.207H95.7068H94.585V86.5V174ZM152.103 85.3782H150.981V86.5V139.35C150.981 151.332 153.91 160.714 159.177 167.122C164.467 173.556 172.018 176.872 180.978 176.872C190.195 176.872 199.986 172.839 206.981 164.139V174V175.122H208.103H225.603H226.725V174V86.5V85.3782H225.603H208.103H206.981V86.5V128.5C206.981 138.83 204.485 146.401 200.734 151.361C196.995 156.303 191.981 158.703 186.753 158.703C181.078 158.703 177.158 156.432 174.597 152.399C171.985 148.285 170.725 142.235 170.725 134.625V86.5V85.3782H169.603H152.103ZM309.469 134.697H310.571L310.591 133.595C310.856 118.556 307.454 106.078 300.872 97.3317C294.263 88.5498 284.518 83.6282 272.369 83.6282C260.758 83.6282 251.032 88.2752 244.228 96.4808C237.439 104.667 233.622 116.316 233.622 130.25C233.622 144.289 237.712 155.958 245.251 164.129C252.8 172.311 263.703 176.872 277.094 176.872C287.977 176.872 297.522 173.662 304.062 168.212L304.466 167.875V167.35V148.8V145.635L302.473 148.093C297.433 154.31 290.401 158.353 279.719 158.353C272.539 158.353 266.442 155.951 262.037 151.69C257.857 147.649 255.131 141.869 254.499 134.697H309.469ZM346.831 174V175.122H347.953H365.453H366.575V174V42.75V41.6282H365.453H347.953H346.831V42.75V174ZM377.518 85.3782H376.396V86.5V139.35C376.396 151.332 379.325 160.714 384.592 167.122C389.882 173.556 397.433 176.872 406.393 176.872C415.61 176.872 425.401 172.839 432.396 164.139V174V175.122H433.518H451.018H452.14V174V86.5V85.3782H451.018H433.518H432.396V86.5V128.5C432.396 138.83 429.9 146.401 426.149 151.361C422.41 156.303 417.396 158.703 412.168 158.703C406.493 158.703 402.573 156.432 400.012 152.399C397.4 148.285 396.14 142.235 396.14 134.625V86.5V85.3782H395.018H377.518ZM525.506 92.1V91.5355L525.053 91.1991C519.46 87.0498 511.88 83.6282 501.459 83.6282C488.907 83.6282 478.275 88.4327 470.79 96.7068C463.313 104.972 459.038 116.629 459.038 130.25C459.038 143.871 463.313 155.529 470.813 163.794C478.321 172.069 488.997 176.872 501.634 176.872C511.976 176.872 519.409 174.371 525.071 169.987L525.506 169.65V169.1V149.675V146.261L523.481 149.01C518.812 155.347 512.336 158.528 503.559 158.528C489.477 158.528 479.481 146.444 479.481 130.25C479.481 114.045 489.486 101.972 503.209 101.972C512.098 101.972 518.612 105.804 523.501 112.042L525.506 114.6V111.35V92.1ZM532.427 174V175.122H533.549H551.049H552.17V174V150.605L562.991 137.589L585.971 174.592L586.3 175.122H586.924H607.049H609.069L608.001 173.407L576.057 122.124L605.457 87.2227L607.01 85.3782H604.599H583.599H583.067L582.731 85.789L552.17 123.086V42.75V41.6282H551.049H533.549H532.427V42.75V174ZM289.781 121.603H254.774C256.755 109.77 263.208 102.147 272.194 102.147C277.106 102.147 281.038 104.095 284.002 107.611C286.796 110.924 288.764 115.678 289.781 121.603Z" stroke="#FFE5E5" stroke-width="2.24359"/> </g> <defs> <filter id="filter0_di_358_74" x="0.684881" y="0.122223" width="658.127" height="227.23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="2.85037" dy="4.48718"/> <feGaussianBlur stdDeviation="22.4359"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0.869466 0 0 0 0 0.0525302 0 0 0 0 0.689741 0 0 0 1 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_358_74"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_358_74" result="shape"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="5.70075"/> <feGaussianBlur stdDeviation="8.97868"/> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.316667 0 0 0 0 0.445597 0 0 0 1 0"/> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_358_74"/> </filter> <linearGradient id="paint0_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint1_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint2_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint3_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint4_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint5_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint6_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint7_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> </defs> </svg>
                    <svg className='circle-subtitle' xmlns="http://www.w3.org/2000/svg" width="555" height="68" viewBox="0 0 555 68" fill="none"> <g filter="url(#filter0_di_372_58)"> <path d="M23.7459 42.9996V19.9196H16.9059V14.9996H36.3459V19.9196H29.5459V42.9996H23.7459Z" fill="url(#paint0_linear_372_58)"/> <path d="M57.9337 42.9996V32.1596H50.2537V42.9996H44.4137V14.9996H50.2537V27.5596H57.9337V14.9996H63.7737V42.9996H57.9337Z" fill="url(#paint1_linear_372_58)"/> <path d="M72.4543 42.9996V14.9996H87.1743V19.9196H78.3343V26.1196H87.1743V30.6396H78.3343V38.0796H87.1743V42.9996H72.4543Z" fill="url(#paint2_linear_372_58)"/> <path d="M108.336 42.9996L110.856 14.9996H117.896L122.256 33.7996L126.576 14.9996H133.696L136.176 42.9996H130.536L129.376 23.2796L124.976 42.9996H119.496L115.256 23.7196L115.096 22.9596H115.056V25.3596L113.976 42.9996H108.336Z" fill="url(#paint3_linear_372_58)"/> <path d="M154.871 43.3996C149.031 43.4396 144.311 40.2796 144.311 33.4796V14.9996H150.111V31.8396C150.111 35.3196 151.591 37.8396 154.871 37.8396C158.151 37.8396 159.671 35.3196 159.671 31.8396V14.9996H165.471V33.4796C165.471 40.2796 160.751 43.3596 154.871 43.3996Z" fill="url(#paint4_linear_372_58)"/> <path d="M174.109 42.9996V14.9996H179.949V38.0796H188.789V42.9996H174.109Z" fill="url(#paint5_linear_372_58)"/> <path d="M200.226 42.9996V19.9196H193.386V14.9996H212.826V19.9196H206.026V42.9996H200.226Z" fill="url(#paint6_linear_372_58)"/> <path d="M220.893 42.9996V14.9996H226.653V42.9996H220.893Z" fill="url(#paint7_linear_372_58)"/> <path d="M247.901 29.0796C247.901 19.1196 254.461 14.5996 260.341 14.5996C262.821 14.5996 265.301 15.2796 266.421 16.1596V22.1596C265.461 21.1596 263.741 20.1596 261.261 20.1596C257.581 20.1596 253.861 23.3196 253.861 29.0796C253.861 34.8396 257.461 37.9196 261.261 37.9196C263.781 37.9196 265.461 36.8796 266.421 35.9196V41.8396C265.101 42.7196 262.981 43.3996 260.341 43.3996C254.461 43.3996 247.901 39.1596 247.901 29.0796Z" fill="url(#paint8_linear_372_58)"/> <path d="M288.574 42.9996V32.1596H280.894V42.9996H275.054V14.9996H280.894V27.5596H288.574V14.9996H294.414V42.9996H288.574Z" fill="url(#paint9_linear_372_58)"/> <path d="M302.025 42.9996L308.265 14.9996H316.625L322.905 42.9996H317.225L316.385 39.0796H308.545L307.705 42.9996H302.025ZM309.585 34.3196H315.345L312.465 20.9996L309.585 34.3196Z" fill="url(#paint10_linear_372_58)"/> <path d="M330.55 42.9996V14.9996H336.31V42.9996H330.55Z" fill="url(#paint11_linear_372_58)"/> <path d="M344.997 42.9996V14.9996H350.757L359.637 32.5996L359.957 33.2796H359.997L359.797 30.9196V14.9996H365.597V42.9996H359.837L350.957 25.4396L350.597 24.7596H350.557L350.757 27.1196V42.9996H344.997Z" fill="url(#paint12_linear_372_58)"/> <path d="M386.848 29.0796C386.848 19.1196 393.408 14.5996 399.288 14.5996C401.768 14.5996 404.248 15.2796 405.368 16.1596V22.1596C404.408 21.1596 402.688 20.1596 400.208 20.1596C396.528 20.1596 392.808 23.3196 392.808 29.0796C392.808 34.8396 396.408 37.9196 400.208 37.9196C402.728 37.9196 404.408 36.8796 405.368 35.9196V41.8396C404.048 42.7196 401.928 43.3996 399.288 43.3996C393.408 43.3996 386.848 39.1596 386.848 29.0796Z" fill="url(#paint13_linear_372_58)"/> <path d="M412.931 42.9996L419.172 14.9996H427.531L433.811 42.9996H428.132L427.292 39.0796H419.452L418.612 42.9996H412.931ZM420.491 34.3196H426.251L423.371 20.9996L420.491 34.3196Z" fill="url(#paint14_linear_372_58)"/> <path d="M440.821 21.8396C440.821 17.4396 444.701 14.5996 449.661 14.5996C452.101 14.5996 454.741 15.1996 456.341 16.3996V22.1596C454.861 20.9596 452.901 19.9196 451.021 19.9196C448.981 19.9196 447.621 21.0796 447.621 22.8796C447.621 26.9596 457.421 29.6396 457.421 36.1596C457.421 40.6396 453.821 43.3996 448.861 43.3996C445.261 43.3996 442.381 42.1196 440.901 41.0796V35.3596C442.421 36.5596 444.901 38.0796 447.421 38.0796C449.421 38.0796 450.621 37.1196 450.621 35.3996C450.621 31.5196 440.821 28.5996 440.821 21.8396Z" fill="url(#paint15_linear_372_58)"/> <path d="M465.395 42.9996V14.9996H471.155V42.9996H465.395Z" fill="url(#paint16_linear_372_58)"/> <path d="M479.842 42.9996V14.9996H485.602L494.482 32.5996L494.802 33.2796H494.842L494.642 30.9196V14.9996H500.442V42.9996H494.682L485.802 25.4396L485.442 24.7596H485.402L485.602 27.1196V42.9996H479.842Z" fill="url(#paint17_linear_372_58)"/> <path d="M508.613 29.0396C508.613 19.2396 514.653 14.5996 521.413 14.5996C528.133 14.5996 534.013 19.2396 534.013 29.0396C534.013 38.8396 528.133 43.3996 521.413 43.3996C514.253 43.3996 508.613 38.8396 508.613 29.0396ZM514.493 29.0396C514.493 35.1196 517.853 37.8796 521.293 37.8796C524.733 37.8796 528.093 35.1196 528.093 29.0396C528.093 22.9596 524.733 20.1196 521.293 20.1196C517.853 20.1196 514.493 22.9596 514.493 29.0396Z" fill="url(#paint18_linear_372_58)"/> <path d="M23.7459 42.9996V19.9196H16.9059V14.9996H36.3459V19.9196H29.5459V42.9996H23.7459Z" stroke="white"/> <path d="M57.9337 42.9996V32.1596H50.2537V42.9996H44.4137V14.9996H50.2537V27.5596H57.9337V14.9996H63.7737V42.9996H57.9337Z" stroke="white"/> <path d="M72.4543 42.9996V14.9996H87.1743V19.9196H78.3343V26.1196H87.1743V30.6396H78.3343V38.0796H87.1743V42.9996H72.4543Z" stroke="white"/> <path d="M108.336 42.9996L110.856 14.9996H117.896L122.256 33.7996L126.576 14.9996H133.696L136.176 42.9996H130.536L129.376 23.2796L124.976 42.9996H119.496L115.256 23.7196L115.096 22.9596H115.056V25.3596L113.976 42.9996H108.336Z" stroke="white"/> <path d="M154.871 43.3996C149.031 43.4396 144.311 40.2796 144.311 33.4796V14.9996H150.111V31.8396C150.111 35.3196 151.591 37.8396 154.871 37.8396C158.151 37.8396 159.671 35.3196 159.671 31.8396V14.9996H165.471V33.4796C165.471 40.2796 160.751 43.3596 154.871 43.3996Z" stroke="white"/> <path d="M174.109 42.9996V14.9996H179.949V38.0796H188.789V42.9996H174.109Z" stroke="white"/> <path d="M200.226 42.9996V19.9196H193.386V14.9996H212.826V19.9196H206.026V42.9996H200.226Z" stroke="white"/> <path d="M220.893 42.9996V14.9996H226.653V42.9996H220.893Z" stroke="white"/> <path d="M247.901 29.0796C247.901 19.1196 254.461 14.5996 260.341 14.5996C262.821 14.5996 265.301 15.2796 266.421 16.1596V22.1596C265.461 21.1596 263.741 20.1596 261.261 20.1596C257.581 20.1596 253.861 23.3196 253.861 29.0796C253.861 34.8396 257.461 37.9196 261.261 37.9196C263.781 37.9196 265.461 36.8796 266.421 35.9196V41.8396C265.101 42.7196 262.981 43.3996 260.341 43.3996C254.461 43.3996 247.901 39.1596 247.901 29.0796Z" stroke="white"/> <path d="M288.574 42.9996V32.1596H280.894V42.9996H275.054V14.9996H280.894V27.5596H288.574V14.9996H294.414V42.9996H288.574Z" stroke="white"/> <path d="M302.025 42.9996L308.265 14.9996H316.625L322.905 42.9996H317.225L316.385 39.0796H308.545L307.705 42.9996H302.025ZM309.585 34.3196H315.345L312.465 20.9996L309.585 34.3196Z" stroke="white"/> <path d="M330.55 42.9996V14.9996H336.31V42.9996H330.55Z" stroke="white"/> <path d="M344.997 42.9996V14.9996H350.757L359.637 32.5996L359.957 33.2796H359.997L359.797 30.9196V14.9996H365.597V42.9996H359.837L350.957 25.4396L350.597 24.7596H350.557L350.757 27.1196V42.9996H344.997Z" stroke="white"/> <path d="M386.848 29.0796C386.848 19.1196 393.408 14.5996 399.288 14.5996C401.768 14.5996 404.248 15.2796 405.368 16.1596V22.1596C404.408 21.1596 402.688 20.1596 400.208 20.1596C396.528 20.1596 392.808 23.3196 392.808 29.0796C392.808 34.8396 396.408 37.9196 400.208 37.9196C402.728 37.9196 404.408 36.8796 405.368 35.9196V41.8396C404.048 42.7196 401.928 43.3996 399.288 43.3996C393.408 43.3996 386.848 39.1596 386.848 29.0796Z" stroke="white"/> <path d="M412.931 42.9996L419.172 14.9996H427.531L433.811 42.9996H428.132L427.292 39.0796H419.452L418.612 42.9996H412.931ZM420.491 34.3196H426.251L423.371 20.9996L420.491 34.3196Z" stroke="white"/> <path d="M440.821 21.8396C440.821 17.4396 444.701 14.5996 449.661 14.5996C452.101 14.5996 454.741 15.1996 456.341 16.3996V22.1596C454.861 20.9596 452.901 19.9196 451.021 19.9196C448.981 19.9196 447.621 21.0796 447.621 22.8796C447.621 26.9596 457.421 29.6396 457.421 36.1596C457.421 40.6396 453.821 43.3996 448.861 43.3996C445.261 43.3996 442.381 42.1196 440.901 41.0796V35.3596C442.421 36.5596 444.901 38.0796 447.421 38.0796C449.421 38.0796 450.621 37.1196 450.621 35.3996C450.621 31.5196 440.821 28.5996 440.821 21.8396Z" stroke="white"/> <path d="M465.395 42.9996V14.9996H471.155V42.9996H465.395Z" stroke="white"/> <path d="M479.842 42.9996V14.9996H485.602L494.482 32.5996L494.802 33.2796H494.842L494.642 30.9196V14.9996H500.442V42.9996H494.682L485.802 25.4396L485.442 24.7596H485.402L485.602 27.1196V42.9996H479.842Z" stroke="white"/> <path d="M508.613 29.0396C508.613 19.2396 514.653 14.5996 521.413 14.5996C528.133 14.5996 534.013 19.2396 534.013 29.0396C534.013 38.8396 528.133 43.3996 521.413 43.3996C514.253 43.3996 508.613 38.8396 508.613 29.0396ZM514.493 29.0396C514.493 35.1196 517.853 37.8796 521.293 37.8796C524.733 37.8796 528.093 35.1196 528.093 29.0396C528.093 22.9596 524.733 20.1196 521.293 20.1196C517.853 20.1196 514.493 22.9596 514.493 29.0396Z" stroke="white"/> </g> <defs> <filter id="filter0_di_372_58" x="0.00588417" y="0.69961" width="554.908" height="66.6008" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="2" dy="5"/> <feGaussianBlur stdDeviation="9.2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0.783333 0 0 0 0 0.0554861 0 0 0 0 0.623207 0 0 0 1 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_372_58"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_372_58" result="shape"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="6.3"/> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.316667 0 0 0 0 0.445597 0 0 0 1 0"/> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_372_58"/> </filter> <linearGradient id="paint0_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint1_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint2_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint3_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint4_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint5_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint6_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint7_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint8_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint9_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint10_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint11_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint12_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint13_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint14_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint15_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint16_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint17_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> <linearGradient id="paint18_linear_372_58" x1="276" y1="14" x2="276" y2="43" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF136C"/> <stop offset="1" stop-color="#BF17D6"/> </linearGradient> </defs> </svg>   
                </div>
                <div className='logo-bottom'>
                    <button className='enter-button' onClick={handleDisclaimer}>Press to Enter</button>
                    <div className='stats'>
                        <p className="rooms-active">{roomText}</p>
                        <p className="statustext">4</p>
                        <div className="line-inbetween"></div>
                        <p className="funds-entered">{fundsText}</p>
                        <p className="statustext">$2500</p>
                    </div>
                </div>
            </div>
            <div className='launch-page'>
                <button className='launch-btn' onClick={handleDisclaimer}>Launch App</button>
            </div>
            <div className='social-icons'>
                <img className='discord-logo' src={discord} />
                <img className='x-logo' src={x} />
            </div>
            
        </div>
    );
};

export default LandingPage;
