const arr=[1,2,3,4,1,0,2,2];
const divide = (arr, n) => {
  let trackingSum=0,ans=[],subArr=[];
	for(let i=0;i<arr.length;i++){
		if(trackingSum+arr[i]<=n){
			subArr.push(arr[i]);
			trackingSum +=arr[i];
		}
		else{
			ans.push(subArr);
			subArr=[arr[i]];
			trackingSum=arr[i];
		}
	}
	ans.push(subArr);
	return ans;
};


const n = prompt("Enter n:");
alert(JSON.stringify(divide(arr, n)));
