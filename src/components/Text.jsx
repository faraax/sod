import {
    Document as PDFDocument,
    StyleSheet,
    Page,
    Font,
} from '@react-pdf / renderer';
import PageFooter from "./PageFooter";
import CoverPage from "./CoverPage";
import Entry from "./Entry";
Font.register({
    family: "Public Sans",
    fonts: [
        {
            src: "https://cdn.companycam.com/fonts/PublicSans-Regular.ttf"
        },
        {
            src: "https://cdn.companycam.com/fonts/PublicSans-SemiBold.ttf",
            fontWeight: 700,
        },
    ],
});// Allow users to include emojis in markup
Font.registerEmojiSource({
    format: "png",
    url: "https://twemoji.maxcdn.com/2/72x72/",
});
const styles = StyleSheet.create({
    // omitted for brevity
});
const Document = ({ report }) => {
    const {
        entries,
        settings,
        photoCount,
        company,
        title,
        subtitle,
        createdAt,
        featuredEntry
    } = report; const { name, logoLargeUrl } = company;
    
    const featuredPhoto = featuredEntry.assetPreviewLarge; return (
        <PDFDocument>
            <Page style={pageStyles} size="LETTER">
                <PageFooter title={title} />
                <CoverPage
                    companyName={name}
                    logo={logoLargeUrl}
                    title={title}
                    subtitle={subtitle}
                    createdAt={createdAt}
                    featuredPhoto={featuredPhoto}
                    photoCount={photoCount}
                />
            </Page>
            <Page style={pageStyles} size="LETTER">
                <PageFooter title={title} />
                {entries.map((entry) => {
                    return (
                        <Entry
                            key={entry.id}
                            entry={entry}
                            settings={settings}
                        />
                    );
                })}
            </Page>
        </PDFDocument>
    );
}; export default Document;