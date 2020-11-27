var a = [];
        function giohang(){
            var bang=document.getElementById("bang");
            while(bang.rows.length>0) {
                bang.deleteRow(0);
            }    
            var x=0;
            for(var i in a){     
                var row=bang.insertRow();
                var cellName = row.insertCell(0);
                var cellDescription = row.insertCell(1);
                var cellPrice = row.insertCell(2);
                cellPrice.align="right";
                cellName.innerHTML = a[i].Name;
                cellDescription.innerHTML = a[i].Description;
                cellPrice.innerHTML = a[i].Price;
                x+=a[i].Price;
            }
            document.getElementById("TongTien").innerHTML=x;
        }
        function AddtoCart(ten,mota,gia){
           var hienthi = {};
           hienthi.Name=ten;
           hienthi.Description=mota;
           hienthi.Price=gia;
           a.push(hienthi);
           giohang();
           alert('Bạn đã thêm vào giỏ hàng !..')
        }
        