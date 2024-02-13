function olympicRing(a){
    var count=0;
    for (var i=0; i<a.length; ++i)
    {
      if (a[i]=='A' || a[i]=='a' || a[i]=='o' || a[i]=='O' || a[i]=='e' || a[i]=='b' || a[i]=='p' || a[i]=='P' || a[i]=='d' || a[i]=='D' || a[i]=='R' || a[i]=='g' || a[i]=='q' || a[i]=='Q')
        count++;
      if (a[i]=='B')
        count+=2;
    }
    return Math.floor(count/2)<=1 ? 'Not even a medal!' : Math.floor(count/2)==2 ? 'Bronze!' : Math.floor(count/2)==3 ? 'Silver!' : 'Gold!';
  }