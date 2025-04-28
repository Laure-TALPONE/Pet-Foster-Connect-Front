import LegalNoticeComponent from "@/legal/legal-notice/LegalNoticeComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - Informations légales du site",
    description:
       "Consultez les mentions légales du site, comprenant les informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation.",
 };

export default function LegalNoticePage() {
    return(
        <LegalNoticeComponent />
    )
}