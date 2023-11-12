import Head from "next/head";
import { useRouter } from "next/router";

import config from "config.json";

const siteMetaData = {
    title: config.title,
    siteUrl: config.siteUrl,
    twitter: config.user.twitterLink,
    socialImage: config.socialImage,
    author: config.username,
};


const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
    const router = useRouter();
  
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`${siteMetaData.siteUrl}${router.asPath}`}
        />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteMetaData.title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} key={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetaData.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twImage} />
      </>
    );
  };


export const pageSEO = ({
    title, description
}) => {
    const ogImageUrl = siteMetaData.siteUrl + siteMetaData.socialImage;
    const twImageUrl = siteMetaData.siteUrl + siteMetaData.socialImage;

    return (
        <CommonSEO
            title={title}
            description={description}
            ogType="website"
            ogImage={ogImageUrl}
            twImage={twImageUrl}
        />
    );
};

export const blogSEO = ({
    title, summary, date, slug
}) => {
    const publishedAt = new Date(date).toISOString();
    const featuredImage = CloudinaryMetaImageUrl({ title });

    return (
        <>
            <CommonSEO
                title={title}
                description={summary}
                ogType="article"
                ogImage={featuredImage}
                twImage={featuredImage}
            />
            <>
                {date && (
                    <meta property="article:published_time" content={publishedAt} />
                )}
            </>
        </>
    );
};

export const CloudinaryMetaImageUrl = ({
    title,
    cloudName = "dhoygnjc7",
    imagePublicId = "blog_banner.png",
    cloudinaryUrlBase = "https://res.cloudinary.com",
    version = "v1641893609",
    titleFont = "roboto",
    titleExtraConfig = "_bold",
    textColor = "BBBBBB",
    textAreaWidth = 600,
    textAreaHeight = 430,
    titleFontSize = 40,
    imageWidth = 1200,
    imageHeight = 630,
    textBottomOffset = -40,
    textLeftOffset = 290,
  }): string => {
    const imageConfig = [
        `w_${imageWidth}`,
        `h_${imageHeight}`,
        `c_fill`,
        `f_auto`,
    ].join(",");

    const titleConfig = [
        `w_${textAreaWidth}`,
        `h_${textAreaHeight}`,
        `c_fit`,
        `co_rgb:${textColor}`,
        `y_${textBottomOffset}`,
        `x_${textLeftOffset}`,
        `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${encodeURIComponent(
            title
        )}`,
    ].join(",");

    const urlParts = [
        cloudinaryUrlBase,
        cloudName,
        "image",
        "upload",
        imageConfig,
        titleConfig,
        version,
        imagePublicId,
    ];

    return urlParts.join("/");

  }