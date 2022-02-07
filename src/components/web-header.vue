<template>
  <div class="container">
    <div class="logo">logo</div>
    <div class="content">
      <Dropdown class="drop_down1">
        <a href="javascript:void(0)">
          <span style="font-size: 20px; font-family: 'Microsoft YaHei'">hover 触发</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown class="drop_down2">
        <a href="javascript:void(0)">
          <span style="font-size: 20px; font-family: 'Microsoft YaHei'">hover 触发</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown class="drop_down3">
        <a href="javascript:void(0)">
          <span style="font-size: 20px; font-family: 'Microsoft YaHei'">hover 触发</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown class="drop_down4">
        <a href="javascript:void(0)">
          <span style="font-size: 20px; font-family: 'Microsoft YaHei'">hover 触发</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown class="drop_down5">
        <a href="javascript:void(0)">
          <span style="font-size: 20px; font-family: 'Microsoft YaHei'">hover 触发</span>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
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
