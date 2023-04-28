import { Head } from "$fresh/runtime.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  mobileBackground: LiveImage;
  desktopBackground: LiveImage;
}

export default function WelcomeBackground(
  { mobileBackground, desktopBackground }: Props,
) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          // @ts-ignore may be available
          fetchpriority="high" 
          media="(max-width: 575px)"
          href={mobileBackground}
        />
        <link
          rel="preload"
          as="image"
          // @ts-ignore may be available
          fetchpriority="high"
          media="(min-width: 576px)"
          href={desktopBackground}
        />
      </Head>
      <div
        id="welcome-bg-ref"
        class="absolute z-[-1] top-0 left-0 w-full h-full bg-no-repeat sm:bg-fixed"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            #welcome-bg-ref {
              background-image: url('${mobileBackground}');
              background-size: 100vw 260vh;
            }

            @media (min-width: 576px) {
              #welcome-bg-ref {
                background-image: url('${desktopBackground}');
                background-size: 100vw 130vh;
              }
            }
        `,
          }}
        >
        </style>
      </div>
    </>
  );
}
