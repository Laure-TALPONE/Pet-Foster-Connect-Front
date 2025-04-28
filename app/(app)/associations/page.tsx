import AssociationsComponent from '@/associations/AssociationsComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Liste des Associations - Trouvez des associations pour animaux à soutenir",
   description:
      "Explorez notre liste d'associations dédiées aux animaux. Découvrez des organisations engagées pour le bien-être animal et comment vous pouvez les soutenir.",
};

export default function AssociationsPage() {
   return <AssociationsComponent />;
}
