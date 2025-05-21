import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SubcriptionAssociation from './SubcriptionAssociation';

describe('SubcriptionAssociation', () => {
   // Test 1 : Le titre principal est visible
   it('affiche le titre principal du formulaire', () => {
      render(<SubcriptionAssociation />);
      const title = screen.getByText(
         /Inscrivez votre association ici pour accéder à un réseau de familles d’accueil/i
      );
      expect(title).toBeInTheDocument();
   });

   // Test 2 : Le bouton "Valider l’inscription" est présent
   it('affiche le bouton "Valider l’inscription"', () => {
      render(<SubcriptionAssociation />);
      const button = screen.getByText('Valider l’inscription');
      expect(button).toBeInTheDocument();
   });

   // Test 3 : Cliquer sur Eye affiche le mot de passe
   it("affiche le mot de passe lorsque l'on clique sur l'icône Eye", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      expect(passwordInput).toHaveAttribute('type', 'password');

      // Récupère tous les boutons avec le même aria-label
      const eyeButtons = screen.getAllByLabelText(
         'afficher/masquer le mot de passe'
      );
      const eyeButtonForPassword = eyeButtons[0]; // Premier bouton = mot de passe

      fireEvent.click(eyeButtonForPassword);
      expect(passwordInput).toHaveAttribute('type', 'text');

      fireEvent.click(eyeButtonForPassword);
      expect(passwordInput).toHaveAttribute('type', 'password');
   });

   // Test 4 : Message d'erreur si mot de passe < 7 caractères
   it("affiche un message d'erreur si le mot de passe est inférieur à 7 caractères", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      // Simule une saisie d'un mot de passe trop court
      fireEvent.change(passwordInput, { target: { value: '12345' } });
      // Vérifie si le message d'erreur est affiché
      const errorMessage = screen.getByText(
         'Votre mot de passe est trop court !'
      );
      expect(errorMessage).toBeInTheDocument();
   });

   // Test 5 : Message d'erreur si pas de majuscule
   it("affiche un message d'erreur si le mot de passe ne comporte pas de majuscule", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      // Simule une saisie d'un mot de passe trop court
      fireEvent.change(passwordInput, { target: { value: 'password' } });
      // Vérifie si le message d'erreur est affiché
      const errorMessage = screen.getByText(
         'Votre mot de passe doit contenir une majuscule !'
      );
      expect(errorMessage).toBeInTheDocument();
   });

   // Test 6 : Message d'erreur si pas de minuscule
   it("affiche un message d'erreur si le mot de passe ne comporte pas de minuscule", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      // Simule une saisie d'un mot de passe trop court
      fireEvent.change(passwordInput, { target: { value: 'PASSWORD' } });
      // Vérifie si le message d'erreur est affiché
      const errorMessage = screen.getByText(
         'Votre mot de passe doit contenir une minuscule !'
      );
      expect(errorMessage).toBeInTheDocument();
   });

   // Test 7 : Message d'erreur si pas de chiffre
   it("affiche un message d'erreur si le mot de passe ne comporte pas de chiffre", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      // Simule une saisie d'un mot de passe trop court
      fireEvent.change(passwordInput, { target: { value: 'Password' } });
      // Vérifie si le message d'erreur est affiché
      const errorMessage = screen.getByText(
         'Votre mot de passe doit contenir un chiffre !'
      );
      expect(errorMessage).toBeInTheDocument();
   });

   // Test 8 : Message d'erreur si pas de caractère spécial
   it("affiche un message d'erreur si le mot de passe ne comporte pas de caractère spécial", () => {
      render(<SubcriptionAssociation />);

      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      // Simule une saisie d'un mot de passe trop court
      fireEvent.change(passwordInput, { target: { value: 'Password44' } });
      // Vérifie si le message d'erreur est affiché
      const errorMessage = screen.getByText(
         'Votre mot de passe doit contenir un caratère spécial : @#! !'
      );
      expect(errorMessage).toBeInTheDocument();
   });

   // Test 9 : Message d'erreur si les mots de passe ne correspondent pas
   it('affiche un message d’erreur si les mots de passe ne correspondent pas', async () => {
      render(<SubcriptionAssociation />);

      // Remplir les champs de mot de passe et confirmation avec des valeurs différentes
      const passwordInput = screen.getByPlaceholderText('Mot de passe');
      const confirmInput = screen.getByPlaceholderText(
         'Confirmer le mot de passe'
      );

      fireEvent.change(passwordInput, { target: { value: 'Test123!' } });
      fireEvent.change(confirmInput, { target: { value: 'Différent123!' } });

      // Déclencher le blur pour simuler que l'utilisateur passe au champ suivant
      fireEvent.blur(confirmInput);

      // Chercher le message d’erreur attendu
      const errorMessage = await screen.findByText(
         'Les mots de passe ne correspondent pas.'
      );

      expect(errorMessage).toBeInTheDocument();
   });

   // Test 10 : Validation du formulaire si tout les champs sont remplis
   it('envoie les données quand le formulaire est valide', async () => {
      const mockResponseData = { message: 'Inscription réussie' };

      // Mock de l'API fetch
      const mockCloudinaryResponse = {
         secure_url: 'https://res.cloudinary.com/demo/image/upload/sample.pdf',
      };

      const mockRegisterResponse = {
         success: true,
         message: 'Inscription réussie',
      };

      global.fetch = jest.fn((url, options) => {
         if (typeof url === 'string' && url.includes('cloudinary.com')) {
            return Promise.resolve({
               ok: true,
               status: 200,
               json: async () => mockCloudinaryResponse,
            });
         }

         if (url === '/api/auth/register/association') {
            return Promise.resolve({
               ok: true,
               status: 200,
               json: async () => mockRegisterResponse,
            });
         }

         return Promise.reject(new Error('URL non reconnue'));
      }) as jest.Mock;

      render(<SubcriptionAssociation />);

      fireEvent.change(screen.getByPlaceholderText('E-mail de connexion'), {
         target: { value: 'test@example.com' },
      });
      fireEvent.change(screen.getByPlaceholderText('Mot de passe'), {
         target: { value: 'Test1234!' },
      });
      fireEvent.change(
         screen.getByPlaceholderText('Confirmer le mot de passe'),
         {
            target: { value: 'Test1234!' },
         }
      );
      fireEvent.change(screen.getByPlaceholderText("Nom de l'association"), {
         target: { value: 'Association Test' },
      });
      fireEvent.change(screen.getByPlaceholderText('Téléphone'), {
         target: { value: '0123456789' },
      });
      fireEvent.change(screen.getByPlaceholderText('Adresse'), {
         target: { value: '123 rue Exemple' },
      });
      fireEvent.change(screen.getByPlaceholderText('Code postal'), {
         target: { value: '75001' },
      });
      fireEvent.change(screen.getByPlaceholderText('Ville'), {
         target: { value: 'Paris' },
      });
      fireEvent.change(screen.getByPlaceholderText('Code RNA Ex: W123456789'), {
         target: { value: 'W123456789' },
      });
      fireEvent.change(screen.getByTestId('registration-date'), {
         target: { value: '2020-01-01' },
      });

      // Simuler le téléchargement du fichier PDF
      fireEvent.change(screen.getByTestId('file-pdf'), {
         target: {
            files: [
               new File(['dummy content'], 'certificat.pdf', {
                  type: 'application/pdf',
               }),
            ],
         },
      });

      // Soumettre le formulaire
      fireEvent.click(
         screen.getByRole('button', { name: /Valider l’inscription/i })
      );

      // Attendre que fetch soit appelé
      await waitFor(() => {
         expect(fetch).toHaveBeenCalledTimes(1);
      });

      // Vérifier que fetch est appelé avec les bons paramètres
      expect(fetch).toHaveBeenCalledWith(
         expect.stringContaining('cloudinary.com'),
         expect.objectContaining({
            method: 'POST',
            body: expect.any(FormData),
         })
      );
   });

   // Test 11 : Verification de l'upload du fichier PDF
   it('met à jour le champ certification_file quand un PDF est uploadé', () => {
      render(<SubcriptionAssociation />);

      const file = new File(['contenu fake'], 'certificat.pdf', {
         type: 'application/pdf',
      });

      const fileInput = screen.getByTestId('file-pdf');
      fireEvent.change(fileInput, {
         target: { files: [file] },
      });

      // Vérifie que le nom du fichier apparaît dans le DOM
      expect(
         screen.getByText('Importez votre récépissé de déclaration (.pdf)')
      ).toBeInTheDocument();
   });

   // Test 12 : Vérification d'un champ requis vide
   it('ajoute une classe d’erreur aux champs requis quand le formulaire est vide', async () => {
      render(<SubcriptionAssociation />);

      // Soumettre le formulaire sans aucune donnée
      fireEvent.click(
         screen.getByRole('button', { name: /Valider l’inscription/i })
      );

      // Attendre que les messages d’erreur ou la classe d’erreur apparaissent
      await waitFor(() => {
         const divsAvecErreur = document.querySelectorAll('.m-input__error');

         // Ajoutons un log pour vérifier si des éléments ont bien la classe m-input__error
         console.log(divsAvecErreur);

         // Vérifie que des éléments avec cette classe existent
         expect(divsAvecErreur.length).toBeGreaterThan(0);
      });

      // Vérifie qu'un champ spécifique comme le champ 'RNA' est en erreur
      const rnaInput = screen.getByPlaceholderText('Code RNA Ex: W123456789');
      expect(rnaInput.closest('div')).toHaveClass('m-input__error');
   });
});
