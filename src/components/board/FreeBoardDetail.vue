<template>
  <h1>Detail</h1>
  <div>
    <div><button>목록</button></div>
    <!-- <div><button>답글</button></div>
    <div><button>수정</button></div>
    <div><button>삭제</button></div> -->
    <p>-----------------</p>
    <div>freeBoardData</div>
    <div>writer</div>
    <div>내용</div>
    {{$route.params.id}}
    
    <p>-----------------</p>
    <div><button>댓글</button></div>
    <div><button>추천해요</button></div>
    <div>[댓글창]</div>
  </div>
</template>

<script>
export default {
    name:"FreeBoardDetailA",
    
    
}
</script>

<style>

</style>