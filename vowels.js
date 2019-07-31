<html>
<body>
<script>
var vowels = 'aeiouAEIOU';
var vcount = 0;
var a = prompt("enter a name");
for(var x = 0; x < a.length ; x++)
{
if (vowels.indexOf(a[x]) !== -1)
{
vcount += 1;
}
}
document.write(vcount);
</script>
</body>
<html>
