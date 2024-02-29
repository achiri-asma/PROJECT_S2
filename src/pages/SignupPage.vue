<template>
  <form @submit="submitForm">

    <input ref="nomInput" type="text" v-model="nom" name="nom" required minlength="4" placeholder="Votre nom" pattern="[a-zA-Z]+" />
    <div>
      <small v-if="$refs.nomInput && $refs.nomInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.nomInput && $refs.nomInput.validity.tooShort">Le nom doit avoir au moins 4 caractères</small>
      <small v-if="$refs.nomInput && $refs.nomInput.validity.patternMismatch">Le nom doit contenir uniquement des
        caractères alphabétiques</small>
    </div>

    <input ref="prenomInput" type="text" v-model="prenom" name="prenom" required minlength="4" placeholder="Votre prénom" pattern="[a-zA-Z]+" />
    <div>
      <small v-if="$refs.prenomInput && $refs.prenomInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.prenomInput && $refs.prenomInput.validity.tooShort">Le prénom doit avoir au moins 4 caractères</small>
      <small v-if="$refs.prenomInput && $refs.prenomInput.validity.patternMismatch">Le prénom doit contenir uniquement des caractères alphabétiques</small>
    </div>

    <input ref="emailInput" type="email" v-model="email" name="email" required placeholder="Votre email" pattern="[a-zA-Z0-9._]+@[a-z]+\.[a-zA-Z]{2,}$" />
    <div>
      <small v-if="$refs.emailInput && $refs.emailInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.emailInput && $refs.emailInput.validity.patternMismatch">Entrez une adresse email valide</small>
    </div>

    <input ref="telInput" type="tel" v-model="tel" name="tel" required placeholder="Votre numéro de téléphone" pattern="^\+213 [0-9]{9}$" />
    <div>
      <small v-if="$refs.telInput && $refs.telInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.telInput && $refs.telInput.validity.tooShort">Le numero du telephone doit avoir 9 chiffres
      </small>
      <small v-if="$refs.telInput && $refs.telInput.validity.patternMismatch">Le numero doit etre sous format +213 123456789</small>
    </div>

    <input ref="psInput" type="password" v-model="password" name="password" required placeholder="Votre mot de passe" minlength="8" pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@\-_.$])[a-zA-Z0-9@\-_.$]+$" />
    <div>
      <small v-if="$refs.psInput && $refs.psInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.psInput && $refs.psInput.validity.tooShort">Le mot de passe doit contenir 8 caracteres au minimum
      </small>
      <small v-if="$refs.psInput && $refs.psInput.validity.patternMismatch">Le mot de passe doit contenir les lettres , les chiffres et les caracteres spéciaux .-_@$</small>
    </div>

    <input ref="cpsInput" type="password" v-model="cpassword" name="cpassword" required placeholder="Confirmer votre mot de passe" minlength="8" pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@\-_.$])[a-zA-Z0-9@\-_.$]+$" />
    <div>
      <small v-if="$refs.cpsInput && $refs.cpsInput.validity.valueMissing">Ce champ est obligatoire</small>
      <small v-if="$refs.cpsInput && $refs.cpsInput.validity.tooShort">Le mot de passe doit contenir 8 caracteres au minimum </small>
      <small v-if="$refs.cpsInput && $refs.cpsInput.validity.patternMismatch">Le mot de passe doit contenir les lettres , les chiffres et les caracteres spéciaux .-_@$</small>
      <small v-if="cpassword !== password">Les mots de passe ne correspondent pas</small>
    </div>

    <button type="submit">Soumettre</button>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const nom = ref('');
    const prenom = ref('');
    const email = ref('');
    const tel = ref('');
    const password = ref('');
    const cpassword = ref('');

    const submitForm = () => {
      alert('Formulaire soumis avec succès!');
    };

    return { nom, prenom,email,tel, password, cpassword, submitForm };
  },
};
</script>
