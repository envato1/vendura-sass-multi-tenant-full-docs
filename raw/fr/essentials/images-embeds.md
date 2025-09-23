# Images et intégrations

> Ajoutez des images, vidéos et autres éléments HTML

## Markdown

Affichez des images ou des vidéos en utilisant la syntaxe Markdown standard.

### Images

<code-preview>

![Image Nuxt Social](https://nuxt.com/new-social.jpg)<template v-slot:code="">

```mdc
![Image Nuxt Social](https://nuxt.com/new-social.jpg)
```

</template>
</code-preview>

Ou avec vos images locales

<code-preview>

![Montagnes enneigées dans une mer de nuages au coucher du soleil](/mountains.webp)<template v-slot:code="">

```mdc
![Montagnes enneigées dans une mer de nuages au coucher du soleil](/mountains.webp)
```

</template>
</code-preview>

<note to="https://image.nuxt.com/">

Docus utilisera le composant `<NuxtImg>` sous le capot à la place de la balise native `img`.

</note>

### Vidéos

<prose-code-preview>
<video :autoplay="true" :controls="true" :loop="true" src="https://res.cloudinary.com/dcrl8q2g3/video/upload/v1745404403/landing_od8epr.mp4">



</video>

<template v-slot:code="">

```mdc
:video{autoplay controls loop src="https://res.cloudinary.com/dcrl8q2g3/video/upload/v1745404403/landing_od8epr.mp4"}
```

</template>
</prose-code-preview>

###
