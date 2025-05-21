import PrivacyPolicyComponent from "@/legal/privacy-policy/PrivacyPolicyComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Protection de vos données personnelles",
    description:
       "Prenez connaissance de notre politique de confidentialité. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles sur notre site.",
 };

export default function LegalNoticePage() {
    return(
        <PrivacyPolicyComponent />
    )
}