const hanoi = function(disc, src, aux, dst){
    if (disc > 0){
      hanoi(disc - 1, src, dst, aux);
      document.write("Move disc " + disc + " from " + src + " to " + dst + "<br />");
      hanoi(disc - 1, aux, src, dst)
    }
  }


