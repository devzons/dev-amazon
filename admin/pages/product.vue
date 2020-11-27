<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="a-section">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align:center;">Add a new Product</h2>
          <form>
            <!-- category dropdown -->
            <div class="a-spacing-top-medium">
              <label for="">Category</label>
              <select class="a-select-option">
                <option
                  v-for="category in categories"
                  :value="category._id"
                  :key="category._id"
                  >{{ category.type }}</option
                >
              </select>
            </div>
            <!-- owner dropdown -->
            <div class="a-spacing-top-medium">
              <label for="">Owner</label>
              <select class="a-select-option">
                <option
                  v-for="owner in owners"
                  :value="owner._id"
                  :key="owner._id"
                  >{{ owner.name }}</option
                >
              </select>
            </div>
            <!-- Title -->
            <div class="a-spacing-top-medium">
              <label>Title</label>
              <input type="text" class="a-input-text" style="width: 100%;" />
            </div>
            <!-- Price -->
            <div class="a-spacing-top-medium">
              <label>Price</label>
              <input type="number" class="a-input-text" style="width: 100%;" />
            </div>
            <!-- Description -->
            <div class="a-spacing-top-medium">
              <label>Description</label>
              <textarea
                placeholder="Product description"
                style="width: 100%;"
              ></textarea>
            </div>
            <!-- Photo -->
            <div class="a-spacing-top-medium">
              <label>Add Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" />
                </label>
                <p>name of the photo</p>
              </div>
            </div>
            <hr />
            <!-- button -->
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text">Add product</span>
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:3000/api/categories");
      let owners = $axios.$get("http://localhost:3000/api/owners");
      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ]);

      console.log(catResponse);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style></style>
