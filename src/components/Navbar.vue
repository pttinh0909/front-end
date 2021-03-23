<template>
  <div>
    <mdb-breadcrumb>
      <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
      <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
      <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
    </mdb-breadcrumb>
  </div>
</template>

<script>
  import { mdbBreadcrumb, mdbBreadcrumbItem } from 'mdbvue';
  export default {
    name: 'Breadcrumb',
    components: {
      mdbBreadcrumb,
      mdbBreadcrumbItem
    }
  }
</script>