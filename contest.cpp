#include <bits/stdc++.h> 
using namespace std ; 
#define int     long long int 
#define pb      push_back
#define pi      pair<int,int>
#define all(v)  v.begin(), v.end()
#define vi      vector<int>
#define li      list<int>
#define inp(x)  int x; cin>>x;
#define take(s) string s;cin>>s;
#define forl(i,ll,ul) for (int i=ll;i<ul; i++)
#define revl(i,ul,ll) for(int i=ul;i>=ll;i--)
#define vvi     vector<vector<int>>
#define vpi     vector<pi>
#define si      set<int> 
#define spi     set<pi> 
#define mi      map<int,int>
#define cyes    cout<<"YES"<< endl
#define cno     cout<<"NO"<< endl
void sorti(vector<int>&a){sort(a.begin(),a.end());}
void printbits(int n){for(int i=0;i<32;i++)cout<<((n>>i)&1);cout<<endl;}
void print(vector<int>&a){for(int i=0;i<a.size();i++)cout<<a[i]<<" ";cout<<endl;}
int lb(vector<int> v, int data) {
auto it = lower_bound(v.begin(), v.end(), data);
size_t ind = distance(v.begin(), it);
return ind;
} 
int ub(vector<int> v, int data) {
auto it = upper_bound(v.begin(), v.end(), data);
size_t ind = distance(v.begin(), it);
return ind;
}

auto solve(){
take(s);
int n=s.size();
int c0=0,c1=0;
bool f=1;
vi v;
int ind=0;
for(int i=0;i<n;i++){
    if(s[i]=='+'){
        v.pb(1);c1++;
    }
    else if(s[i]=='-'){
        if(v.size()==0){ f=0; break; }
        ind--;
        if(v.back())c1--; else c0--;
        v.pop_back();
    }
    else if(s[i]=='1'){
        if(v.size()!=c1){ f=0; break; }
        ind=v.size()-1;
    }
    else if(s[i]=='0'){
        if(v.size()<2){ f=0; break; }
        int m=v.size()-1;
        if(m+1==c1){
            if(m>ind){v[m]=0;c1--;c0++;}
            else {f=0; break;}
        }
    }
    // print(v);
}
for(int i=0;i<n-1;i++){
    if(s[i]=='1'&&s[i+1]=='0')f=0;
    if(s[i]=='0'&&s[i+1]=='1')f=0;
}
if(f)cyes;
else cno;
return s;

}
signed main(){
int t;
cin>>t;
for(int i=0;i<t;i++){
string g=solve();
// if(i==57)cout<<g<<endl;
}
return 0;
}