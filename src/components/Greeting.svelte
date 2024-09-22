<script langs="ts">
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greeting= ""

    if (currentHour < 12) {
        greeting = 'Buenos Dias'
    } else if (currentHour < 18) {
        greeting = 'Buenas Tardes'
    } else {
        greeting = 'Buenas Noches'
    }
</script>

<h1 class="text-3xl font-bold text-white">{greeting}</h1>