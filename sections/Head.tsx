import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  faviconUrl: string;
  styleUrls: string[];
  themeColor: string;
}

export default function HeadComponent({
  title = "deco.cx — starter site",
  description = "Deliver complete commerce experiences — start here!",
  url = "https://start.deco.site",
  imageUrl = "https://deco.cx/images/deco-logo-light.png",
  faviconUrl = "",
  styleUrls = [],
  themeColor = "#003232",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor}></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={imageUrl}
      />
      <link
        rel="shortcut icon"
        href={faviconUrl}
        type="image/x-icon"
      >
      </link>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      </link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      </link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" data-color="#003232">
      </link>
      <meta name="theme-color" content="#003232"></meta>
      <meta name="msapplication-TileColor" content="#003232"></meta>
      {styleUrls?.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(/fonts/IBMPlexSans-Light.ttf) format('truetype');
          }
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(/fonts/IBMPlexSans-Medium.ttf) format('truetype');
          }
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(/fonts/IBMPlexSans-Bold.ttf) format('truetype');
          }
          @font-face {
            font-family: 'DIN-Next-LT-Pro';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/DIN-Next-LT-Pro-Regular.ttf) format('truetype');
          }

          html {
            font-size: 8px;
          }
        
          @media screen and (min-width: 320px) {
              html {
                  font-size:calc(8px + 8 * ((100vw - 320px) / 880));
              }
          }
        
          @media screen and (min-width: 1100px) {
              html {
                  font-size:12px;
              }
          }

          .welcome-title-draw {
            position: relative;
          }

          .welcome-title-draw::after {
            content: "";
            background-image: url('/circle-effect.png');
            background-size: 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: -50%;
            top: -15%;
            width: 230px;
            height: 119px;
          }

          @media (max-width: 570px) {
            .welcome-title-draw::after {
              width: 9rem;
              left: -49%;
              top: -11%
            }
          }

          @media (max-width: 940px) {
            .welcome-title-draw::after {
              width: 115px;
              height: 60px;
              left: -40%;
              top: -11%
            }
          }

          @media (max-width: 839px) {
            .welcome-title-draw::after {
              width:115px;
              height: 60px;
              left: -56%;
              top: -11%
            }
          }

          @media (max-width: 719px) {
            .welcome-title-draw::after {
              width:115px;
              height: 60px;
              left: -73%;
              top: -11%
            }
          }

          @media (max-width: 560px) {
            .welcome-title-draw::after {
              width:80px;
              height: 60px;
              left: -45%;
              top: -11%
            }
          }

          @media (min-width: 939px) {
            .welcome-title-draw::after {
              width: 115px;
              height: 60px;
              left: -31%;
              top: -5%
            }
          }

          @media (min-width: 1100px) and (min-aspect-ratio:1/2) {
            .welcome-title-draw::after {
              left: -37%;
              top: -9%;
              width: 150px;
              height: 119px
            }
          }

          @media (min-width: 1230px) and (min-aspect-ratio:1/2) {
            .welcome-title-draw::after {
              left: -37%;
              top: -9%;
              width: 150px
            }
          }

          @media (min-width: 1430px) and (min-aspect-ratio:1/2) {
            .welcome-title-draw::after {
              left: -42%;
              top: -5%;
              width: 190px;
              height: 119px
            }
          }

          @media (min-width: 1600px) and (min-aspect-ratio:1/2) {
            .welcome-title-draw::after {
              left: -30%;
              top: -7%;
              width: 210px;
              height: 119px
            }
          }
      `,
        }}
      >
      </style>
      {/* TODO: Procurar o script */}
      {/* <script async id="quicklink" src="/scripts/quicklink.umd.js"></script> */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            `window.mobile=false;(function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.mobile=true})(navigator.userAgent||navigator.vendor||window.opera);`,
        }}
      >
      </script>
    </Head>
  );
}
