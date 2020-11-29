<template>
  <main>
    <div class="a-spacing-top-medium"></div>
    <!-- breadcrumbs -->
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a href="#" class="a-link-normal a-color-tertiary">Category</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a href="#" class="a-link-normal a-color-tertiary"
                >Product Title</a
              >
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- product image -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- image -->
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img
                    src="/img/featuredProduct.jpg"
                    alt="product image"
                    class="img-fluid"
                  />
                </div>
              </div>
              <!-- follow author -->
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Follow The Author</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- Author's image -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img
                            src="/img/featuredProduct.jpg"
                            alt="image"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <!-- author name -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">Walter Isaacson</a>
                      </div>
                    </div>
                    <!-- author button -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- description -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- product title -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">Harry Potter</span>
                  <span class="smallTitle">Paperback</span>
                </h1>
              </div>
              <!-- author's name -->
              <div class="bylineinfo">
                by
                <a href="#" class="authorName"
                  >Walter Isaacson
                  <i
                    class="fas fa-chevron-down"
                    sytle="font-size: 8px !important; color: #555 !important;"
                  ></i>
                </a>
                (Author)
              </div>
              <div class="reviewGroup"></div>
              <hr style="margin-top: 10px;" />
              <!-- A tags Dummy Data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander"
                    >>
                    <span class="tmmShowPrompt"
                      >See all 18 formats and editions</span
                    >
                  </a>
                  <ul>
                    <!-- kindle -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Read with Our
                                <span class="a-text-bold">Free App</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- audible -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span
                                ><img
                                  src="/img/audibleLogo.png"
                                  class="img-fluid"
                                  style="width: 20px;"
                                />
                                Audible</span
                              >
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                <span class="a-text-bold">Free App</span> with
                                your Audible Trial
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- paperback -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Paperback</span>
                              <br />
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Description -->
              <div class="bookDescription">
                <div class="bookDescriptionInner">This book is awesome</div>
              </div>
              <!-- product specification -->
              <div class="aboutEbookFeature">
                <hr />
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declarative">
                      Length:
                      <span
                        ><a href="#"
                          >386 pages <i class="a-icon a-icon-popover"></i></a
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>
