
/*1.Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.

Ví dụ: INPUT là [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”] thì 
OUTPUT return là [“PHUOC”, “KHANH”]
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function allLongestStrings(inputArray) {
    
}
 */

let arr=['BINH','HUNG','PHUOC','CAO','KHANH']

function aLS(arr){
    for(i=0;i<arr.length-1;i++)
    {
        for(j=1;j<arr.length;j++)
        {
            if(arr[i].length<arr[j].length)
            {
                arr.splice(i,1)
            }
        }
    }
    return arr
}

document.write(aLS(arr))