<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="content">
      <a-dropdown class="drop_down1">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-dropdown class="drop_down2">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-dropdown class="drop_down3">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-dropdown class="drop_down4">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me
          <a-icon type="down"/>
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>

    </div>
    <div class="sign">
      <Button class="btn_sign" type="primary" shape="circle" size="large">
        <spin style="font-weight: bold; color: aliceblue">Sign Up</spin>
      </Button>
      <Button class="btn_login" shape="circle" size="large" style="font-weight: bold;">Login</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-header"
}
</script>

<style scoped>
.container {
  display: grid;
  position: fixed;
  height: 100px;
  background-color: white;
  width: 100vw;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas: "logo content sign";
}

.logo {
  grid-area: logo;
}

.content {
  grid-area: content;
  display: grid;
  grid-template-columns:repeat(5, 20%);
  grid-template-rows: 2fr  2fr  1fr;
  grid-template-areas: '. . . . .'
                       'a b c d e'
                       '. . . . .';
}

.sign {
  display: grid;
  grid-area: sign;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 33.3%);
  grid-template-areas: 'a a a a'
                       'b c d e'
                       'g g g g';
  grid-column-gap: 15px;

}

.drop_down1 {
  grid-area: a;
}

.drop_down2 {
  grid-area: b;
}

.drop_down3 {
  grid-area: c;
}

.drop_down4 {
  grid-area: d;
}

.drop_down5 {
  grid-area: e;
}

.btn_sign {
  grid-area: c;
}

.btn_login {
  grid-area: d;
}
</style>
