# Syntaxe Markdown

> Texte, titres et mise en forme en markdown standard.

## Titres

Utilisez des titres pour introduire les sections principales. Ils structurent votre documentation et aident les utilisateurs à naviguer dans le contenu.

<code-preview className="[&>div]:*:my-0">

Titres<template v-slot:code="">

```mdc
## Titres
```

</template>
</code-preview>

### Sous-titres

Utilisez des sous-titres pour diviser davantage les sections. Ils créent une hiérarchie de contenu plus détaillée pour une meilleure lisibilité.

<code-preview className="[&>div]:*:my-0">

Sous-titres<template v-slot:code="">

```mdc
### Sous-titres
```

</template>
</code-preview>

<tip>

Chaque titre et sous-titre crée une ancre et apparaît automatiquement dans la table des matières.

</tip>

## Mise en forme du texte

Docus prend en charge la plupart des options de mise en forme Markdown.

<table>
<thead>
  <tr>
    <th>
      Style
    </th>
    
    <th>
      Syntaxe
    </th>
    
    <th>
      Résultat
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Gras
    </td>
    
    <td>
      <code>
        **gras**
      </code>
    </td>
    
    <td>
      <strong>
        Gras
      </strong>
    </td>
  </tr>
  
  <tr>
    <td>
      Italique
    </td>
    
    <td>
      <code>
        *italique*
      </code>
    </td>
    
    <td>
      <em>
        Italique
      </em>
    </td>
  </tr>
  
  <tr>
    <td>
      Barré
    </td>
    
    <td>
      <code>
        ~~barré~~
      </code>
    </td>
    
    <td>
      <del>
        Barré
      </del>
    </td>
  </tr>
</tbody>
</table>

Combinez les styles pour enrichir le texte et mettre en valeur des éléments.

<table>
<thead>
  <tr>
    <th>
      Style
    </th>
    
    <th>
      Syntaxe
    </th>
    
    <th>
      Résultat
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Gras Italique
    </td>
    
    <td>
      <code>
        **_gras italique_**
      </code>
    </td>
    
    <td>
      <em>
        <strong>
          Gras Italique
        </strong>
      </em>
    </td>
  </tr>
  
  <tr>
    <td>
      Gras Barré
    </td>
    
    <td>
      <code>
        ~~**gras**~~
      </code>
    </td>
    
    <td>
      <del>
        <strong>
          Gras
        </strong>
      </del>
    </td>
  </tr>
  
  <tr>
    <td>
      Italique Barré
    </td>
    
    <td>
      <code>
        ~~*italique*~~
      </code>
    </td>
    
    <td>
      <del>
        <em>
          Italique
        </em>
      </del>
    </td>
  </tr>
</tbody>
</table>

## Liens

Les liens relient différentes parties de votre documentation et des ressources externes, essentiels pour la navigation et les références.
Pour créer un lien, entourez le texte du lien avec des crochets `[]()`.

<code-preview className="[&>div]:*:my-0">

[Nuxt UI Pro](https://ui.nuxt.com/getting-started/installation/pro/nuxt)<template v-slot:code="">

```mdc
[Nuxt UI Pro](https://ui.nuxt.com/getting-started/installation/pro/nuxt)
```

</template>
</code-preview>

### Liens internes

Pour lier des pages de votre documentation, utilisez des chemins relatifs à la racine comme `/getting-started/installation`.

<code-preview className="[&>div]:*:my-0">

[Installation](/fr/getting-started/installation)<template v-slot:code="">

```mdc
[Installation](/fr/getting-started/installation)
```

</template>
</code-preview>

## Listes

Organisez des éléments liés dans un format structuré et lisible. Markdown prend en charge les listes non ordonnées, ordonnées et imbriquées pour divers besoins.

### Non ordonnée

Utilisez des listes non ordonnées pour des éléments sans ordre particulier. Commencez chaque élément par un symbole `-`.

<code-preview className="[&>div]:*:my-0">

- Je suis un élément de liste.
- Je suis un autre élément de liste.
- Je suis le dernier élément de liste.

<template v-slot:code="">

```mdc
- Je suis un élément de liste.
- Je suis un autre élément de liste.
- Je suis le dernier élément de liste.
```

</template>
</code-preview>

### Ordonnée

Utilisez des listes ordonnées lorsque l'ordre des éléments est important, comme des étapes d'un processus. Commencez chaque élément par un numéro.

<code-preview className="[&>div]:*:my-0">

1. Je suis un élément de liste.
2. Je suis un autre élément de liste.
3. Je suis le dernier élément de liste.

<template v-slot:code="">

```mdc
1. Je suis un élément de liste.
2. Je suis un autre élément de liste.
3. Je suis le dernier élément de liste.
```

</template>
</code-preview>

### Imbriquée

Créez des listes hiérarchiques avec des sous-éléments pour des structures complexes. Indentez les sous-éléments de quatre espaces pour l'imbrication.

<code-preview className="[&>div]:*:my-0">

- Je suis un élément de liste.
  - Je suis un élément de liste imbriqué.
  - Je suis un autre élément de liste imbriqué.
- Je suis un autre élément de liste.

<template v-slot:code="">

```mdc
- Je suis un élément de liste.
  - Je suis un élément de liste imbriqué.
  - Je suis un autre élément de liste imbriqué.
- Je suis un autre élément de liste.
```

</template>
</code-preview>

## Tableaux

Présentez des données structurées en lignes et colonnes. Les tableaux sont idéaux pour comparer des données ou lister des propriétés.

<code-preview className="[&>div]:*:my-0,[&>div]:*:w-full">
<table>
<thead>
  <tr>
    <th>
      Prop
    </th>
    
    <th>
      Défaut
    </th>
    
    <th>
      Type
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        name
      </code>
    </td>
    
    <td>
      
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        size
      </code>
    </td>
    
    <td>
      <code>
        md
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      <code>
        neutral
      </code>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
  </tr>
</tbody>
</table>

<template v-slot:code="">

```mdc
| Prop    | Défaut    | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |
```

</template>
</code-preview>

## Citations

Mettez en avant des citations, références ou textes importants. Les citations distinguent visuellement le contenu cité.

### Une ligne

Les citations sur une seule ligne sont idéales pour des citations courtes et percutantes. Ajoutez un `>` devant un paragraphe. Idéal pour les citations courtes.

<code-preview className="[&>div]:*:my-0">

Nuxt UI Pro est une collection de composants Vue, de composables et d'utilitaires construits sur Nuxt UI, orientés structure et layout, conçus comme des blocs de construction pour votre application.

<template v-slot:code="">

```mdc
> Nuxt UI Pro est une collection de composants Vue, de composables et d'utilitaires construits sur Nuxt UI, orientés structure et layout, conçus comme des blocs de construction pour votre application.
```

</template>
</code-preview>

### Multiligne

Les citations multiligne conviennent aux citations plus longues ou pour inclure plusieurs paragraphes dans une seule citation.

<code-preview className="[&>div]:*:my-0">

Nuxt UI Pro est une collection de composants Vue, de composables et d'utilitaires construits sur Nuxt UI, orientés structure et layout, conçus comme des blocs de construction pour votre application.

Créez de belles applications Vue réactives et accessibles avec Nuxt UI Pro.

<template v-slot:code="">

```mdc
> Nuxt UI Pro est une collection de composants Vue, de composables et d'utilitaires construits sur Nuxt UI, orientés structure et layout, conçus comme des blocs de construction pour votre application.
>
> Créez de belles applications Vue réactives et accessibles avec Nuxt UI Pro.
```

</template>
</code-preview>
