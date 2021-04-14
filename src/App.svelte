<script>
  let pricerange;
  let skintype;
  let recom;

  $: {
    recom = pricerange === '$' ? 'Drink shit' : 'Cool!';
  }
</script>

<h2>Price range</h2>
<button on:click={() => (pricerange = '$')}>$</button>
<button on:click={() => (pricerange = '$$')}>$$</button>
<button on:click={() => (pricerange = '$$$')}>$$$</button>

{pricerange}

<br /><br />

<h2>Skin type</h2>

<button on:click={() => (skintype = 'Oily')}>Oily</button>
<button on:click={() => (skintype = 'Dry')}>Dry</button>
<button on:click={() => (skintype = 'Both')}>Both</button>
<button on:click={() => (skintype = 'Sensitive')}>Sensitive</button>

{skintype}

<br /><br />

<h2>Your recomendation</h2>

{recom}

<br /><br />

<a target="_blank" href="https://github.com/dymoo/skincarebuilder"
  >Check out the source code on GitHub</a
>
