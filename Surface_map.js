
// Input file

title = 'Surface maps'

framec='Teal'

v[0] = ['m']
t[0] = v[0]
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL','Ireland'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','TT','TD','QQ','RH','NN','PE1','PE3','PE6','PE12','PE24','LC','CH']
t[4] = ['Mslp','U10m','Max Wind Gust','T2m','Td2m','Q2m','Rh2m','Cloud cover','1h Precipitation','3h Precipitation','6h Precipitation','12h Precipitation','24h Precipitation','Low clouds','Cloud base']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['DEF','CDCN_mod']
t[6] =v[6]
v[7] =['00','06','12','18'] ;
t[7] = v[7] ;
v[8] = ['b','r'];
t[8] = ['Bias','Rmse'];
v[9] =['ALL','00','12'] ;
t[9] = v[9] ;

spec_name =[0,8,1,2,3,9,7,6,4,5]

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Hour','Error','Initial time']
loc =['l','l','t','t','t','l','l','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = ''; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']

