<?php /* Template name: Choose Your PondNet Survey Site */
get_header('wide'); ?>

<?php the_post(); ?>

<!--<section id="main-content" class="container"> -->
<h1 class="<?php echo freshwater_title_class(); ?>"><?php the_title(); ?></h1>

<?php get_sidebar('subnav'); ?>

<article id="content" class="full-width">
  <?php if (has_post_thumbnail()) the_post_thumbnail (); ?>
  <?php the_content(); ?>
<style>
      #map-canvas {
        width: 750px;
    height: 630px;
        margin: 0;
    padding: 20;
      }
      #legend {
      width: 235px;
    height: 160px;
        font-family: Arial, sans-serif;
        background: #fff;
        padding: 10px;
        margin: 15px;
        border: 1px solid #000;
      }
      #legend h3 {
        margin-top: 0;
    font-size: 18px;
    margin-bottom: 10px;
      }
      #legend img {
        vertical-align: middle;
      }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
  <br><br>
  <div id="chk_box_holder" style="width: 750px; height: 120px;">
    <form action="">
      <table border='0'>
        <tr>
        <th align="right">Great crested newt eDNA survey</th>
        <td><input type="radio" name="sites" id="edna_chk_box" onclick="show_hide_markers(this);"/></td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <th align="right">Great crested newt traditional survey</th>
        <td><input type="radio" name="sites" id="gcn_chk_box" onclick="show_hide_markers(this);"/></td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <th align="right">Toad and frog<br>survey</th>
        <td><input type="radio" name="sites" id="toad_chk_box" checked="checked" onclick="show_hide_markers(this);"/></td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <th align="right">Wetland plant survey</th>
        <td><input type="radio" name="sites" id="wetland_chk_box" onclick="show_hide_markers(this);"/></td></tr>
        <tr height="20px"></tr>
        <tr>
        <th align="right">Invertebrate family survey</th>
        <td><input type="radio" name="sites" id="invertebrate_chk_box" onclick="show_hide_markers(this);"/></td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <th align="right">Adult dragonfly<br>survey</th>
        <td><input type="radio" name="sites" id="dragonfly_chk_box" onclick="show_hide_markers(this);"/></td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <th align="right">Environmental variables survey</th>
        <td><input type="radio" name="sites" id="environmental_chk_box" onclick="show_hide_markers(this);"/></td>
        </tr>
      </table>
    </form>
  </div>
  <div id="status" style="width: 750px; height: 25px; visibility: visible;">
    The map is being loaded ... Please do not click anywhere till this message disappears
  </div>
  
  <div id="map-canvas"></div>
  <div id="legend"><h3>Legend</h3></div>


<script>
var map;
var myMarker;
var current_marker;
var mgr;
var other_step_done = 0;
var edna_lat = new Array();
var edna_lon = new Array();
var edna_details = new Array();
var edna_grid_ref = new Array();
var edna_2015 = new Array();
var edna_allocated = new Array();
var edna_markers = new Array();
var edna_thames = new Array();
var gcn_lat = new Array();
var gcn_lon = new Array();
var gcn_details = new Array();
var gcn_grid_ref = new Array();
var gcn_2015 = new Array();
var gcn_allocated = new Array();
var gcn_markers = new Array();
var toad_lat = new Array();
var toad_lon = new Array();
var toad_details = new Array();
var toad_grid_ref = new Array();
var toad_2015 = new Array();
var toad_allocated = new Array();
var toad_markers = new Array();
var wetland_lat = new Array();
var wetland_lon = new Array();
var wetland_grid_ref = new Array();
var wetland_details = new Array();
var wetland_2015 = new Array();
var wetland_allocated = new Array();
var wetland_markers = new Array();
var invertebrate_lat = new Array();
var invertebrate_lon = new Array();
var invertebrate_grid_ref = new Array();
var invertebrate_details = new Array();
var invertebrate_2015 = new Array();
var invertebrate_allocated = new Array();
var invertebrate_markers = new Array();
var dragonfly_lat = new Array();
var dragonfly_lon = new Array();
var dragonfly_grid_ref = new Array();
var dragonfly_details = new Array();
var dragonfly_2015 = new Array();
var dragonfly_allocated = new Array();
var dragonfly_markers = new Array();
var environmental_lat = new Array();
var environmental_lon = new Array();
var environmental_grid_ref = new Array();
var environmental_details = new Array();
var environmental_2015 = new Array();
var environmental_allocated = new Array();
var environmental_markers = new Array();


//Dragonflies:
dragonfly_lat[0] = 54.570354;
dragonfly_lon[0] = -3.0842522;
dragonfly_2015[0] = 1;
dragonfly_allocated[0] = 0;
dragonfly_grid_ref[0] = "NY3020";
dragonfly_details[0] = "Grid reference : NY3020<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[1] = 54.8624003301;
dragonfly_lon[1] = -2.31310980661;
dragonfly_2015[1] = 1;
dragonfly_allocated[1] = 0;
dragonfly_grid_ref[1] = "NY8052";
dragonfly_details[1] = "Grid reference : NY8052<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[2] = 54.404103;
dragonfly_lon[2] = -2.2941978;
dragonfly_2015[2] = 1;
dragonfly_allocated[2] = 0;
dragonfly_grid_ref[2] = "NY8101";
dragonfly_details[2] = "Grid reference : NY8101<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[3] = 54.952318;
dragonfly_lon[3] = -2.282578;
dragonfly_2015[3] = 1;
dragonfly_allocated[3] = 0;
dragonfly_grid_ref[3] = "NY8262";
dragonfly_details[3] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[4] = 55.141288;
dragonfly_lon[4] = -2.1270385;
dragonfly_2015[4] = 1;
dragonfly_allocated[4] = 0;
dragonfly_grid_ref[4] = "NY9283";
dragonfly_details[4] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[5] = 53.999383;
dragonfly_lon[5] = -1.6048597;
dragonfly_2015[5] = 1;
dragonfly_allocated[5] = 0;
dragonfly_grid_ref[5] = "NZ0912";
dragonfly_details[5] = "Grid reference : NZ0912<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[6] = 54.916529442;
dragonfly_lon[6] = -1.78312312644;
dragonfly_2015[6] = 1;
dragonfly_allocated[6] = 0;
dragonfly_grid_ref[6] = "NZ1458";
dragonfly_details[6] = "Grid reference : NZ1458<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[7] = 54.754227;
dragonfly_lon[7] = - -1.5820112;
dragonfly_2015[7] = 1;
dragonfly_allocated[7] = 0;
dragonfly_grid_ref[7] = "NZ2740 ";
dragonfly_details[7] = "Grid reference : NZ2740<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[8] = 53.5636489346;
dragonfly_lon[8] = -3.08855565622;
dragonfly_2015[8] = 1;
dragonfly_allocated[8] = 0;
dragonfly_grid_ref[8] = "SD2808";
dragonfly_details[8] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/SD2808.pdf'>View site details</a><br><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[9] = 53.7624022374;
dragonfly_lon[9] = -2.9723298506;
dragonfly_2015[9] = 1;
dragonfly_allocated[9] = 0;
dragonfly_grid_ref[9] = "SD3630";
dragonfly_details[9] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[10] = 53.8551716738;
dragonfly_lon[10] = -2.5031806391;
dragonfly_2015[10] = 1;
dragonfly_allocated[10] = 0;
dragonfly_grid_ref[10] = "SD6740";
dragonfly_details[10] = "Grid reference : SD6740<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[11] = 53.810945;
dragonfly_lon[11] = -1.7129387;
dragonfly_2015[11] = 1;
dragonfly_allocated[11] = 0;
dragonfly_grid_ref[11] = "SE1935";
dragonfly_details[11] = "Grid reference : SE1935<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[12] = 54.089552;
dragonfly_lon[12] = -2.2919661;
dragonfly_2015[12] = 1;
dragonfly_allocated[12] = 0;
dragonfly_grid_ref[12] = "SD8166";
dragonfly_details[12] = "Grid reference : SD8166<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[13] = 53.06994;
dragonfly_lon[13] = -3.777548;
dragonfly_2015[13] = 1;
dragonfly_allocated[13] = 0;
dragonfly_grid_ref[13] = "SH8154";
dragonfly_details[13] = "Grid reference : SH8154<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[14] = 52.650658;
dragonfly_lon[14] = -2.5040031;
dragonfly_2015[14] = 1;
dragonfly_allocated[14] = 0;
dragonfly_grid_ref[14] = " SJ6606";
dragonfly_details[14] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[15] = 53.9639911006;
dragonfly_lon[15] = -0.522932667049;
dragonfly_2015[15] = 1;
dragonfly_allocated[15] = 0;
dragonfly_grid_ref[15] = "SE9753";
dragonfly_details[15] = "Grid reference : SE9753<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[16] = 52.9130687779;
dragonfly_lon[16] = -4.49997202286;
dragonfly_2015[16] = 1;
dragonfly_allocated[16] = 0;
dragonfly_grid_ref[16] = "SH3238";
dragonfly_details[16] = "Grid reference : SH3238<BR>County : Gwynedd - Gwynedd<BR><br><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[17] = 53.3624101824;
dragonfly_lon[17] = -4.51118015931;
dragonfly_2015[17] = 1;
dragonfly_allocated[17] = 0;
dragonfly_grid_ref[17] = "SH3388";
dragonfly_details[17] = "Grid reference : SH3388<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[18] = 52.9514384309;
dragonfly_lon[18] = -4.3830836192;
dragonfly_2015[18] = 1;
dragonfly_allocated[18] = 0;
dragonfly_grid_ref[18] = "SH4042";
dragonfly_details[18] = "Grid reference : SH4042<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[19] = 53.302018;
dragonfly_lon[19] = -4.3875014;
dragonfly_2015[19] = 1;
dragonfly_allocated[19] = 0;
dragonfly_grid_ref[19] = "SH4181";
dragonfly_details[19] = "Grid reference : SH4181<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[20] = 53.3921210935;
dragonfly_lon[20] = -4.37755850085;
dragonfly_2015[20] = 1;
dragonfly_allocated[20] = 0;
dragonfly_grid_ref[20] = "SH4291";
dragonfly_details[20] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[21] = 53.2765437624;
dragonfly_lon[21] = -4.31113553084;
dragonfly_2015[21] = 1;
dragonfly_allocated[21] = 0;
dragonfly_grid_ref[21] = "SH4678";
dragonfly_details[21] = "Grid reference : SH4678<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[22] = 52.5889545227;
dragonfly_lon[22] = -4.05332268023;
dragonfly_2015[22] = 1;
dragonfly_allocated[22] = 0;
dragonfly_grid_ref[22] = "SH6101";
dragonfly_details[22] = "Grid reference : SH6101<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[23] = 52.9675501917;
dragonfly_lon[23] = -3.99676450211;
dragonfly_2015[23] = 1;
dragonfly_allocated[23] = 0;
dragonfly_grid_ref[23] = "SH6643";
dragonfly_details[23] = "Grid reference : SH6643<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[24] = 52.8701874295;
dragonfly_lon[24] = -3.90313814227;
dragonfly_2015[24] = 1;
dragonfly_allocated[24] = 0;
dragonfly_grid_ref[24] = "SH7232";
dragonfly_details[24] = "Grid reference : SH7232<BR>County : Gwynedd - Gwynedd<BR><br><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[25] = 53.1865040942;
dragonfly_lon[25] = -3.79737805126;
dragonfly_2015[25] = 1;
dragonfly_allocated[25] = 0;
dragonfly_grid_ref[25] = "SH8067";
dragonfly_details[25] = "Grid reference : SH8067<BR>County : Conwy - Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[26] = 53.2907636017;
dragonfly_lon[26] = -3.3966620632;
dragonfly_2015[26] = 1;
dragonfly_allocated[26] = 0;
dragonfly_grid_ref[26] = "SJ0778";
dragonfly_details[26] = "Grid reference : SJ0778<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[27] = 52.8242997247;
dragonfly_lon[27] = -3.30744776728;
dragonfly_2015[27] = 1;
dragonfly_allocated[27] = 0;
dragonfly_grid_ref[27] = "SJ1226";
dragonfly_details[27] = "Grid reference : SJ1226<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[28] = 52.6267374656;
dragonfly_lon[28] = -3.28677673972;
dragonfly_2015[28] = 1;
dragonfly_allocated[28] = 0;
dragonfly_grid_ref[28] = "SJ1304";
dragonfly_details[28] = "Grid reference : SJ1304<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[29] = 52.7172422833;
dragonfly_lon[29] = -3.2302183645;
dragonfly_2015[29] = 1;
dragonfly_allocated[29] = 0;
dragonfly_grid_ref[29] = "SJ1714";
dragonfly_details[29] = "Grid reference : SJ1714<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[30] = 53.2388140454;
dragonfly_lon[30] = -3.21515485731;
dragonfly_2015[30] = 1;
dragonfly_allocated[30] = 0;
dragonfly_grid_ref[30] = "SJ1972";
dragonfly_details[30] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[31] = 52.6730471091;
dragonfly_lon[31] = -3.15502613582;
dragonfly_2015[31] = 1;
dragonfly_allocated[31] = 0;
dragonfly_grid_ref[31] = "SJ2209";
dragonfly_details[31] = "Grid reference : SJ2209<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[32] = 52.7361064011;
dragonfly_lon[32] = -3.14188107572;
dragonfly_2015[32] = 1;
dragonfly_allocated[32] = 0;
dragonfly_grid_ref[32] = "SJ2316";
dragonfly_details[32] = "Grid reference : SJ2316<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[33] = 53.1586686845;
dragonfly_lon[33] = -3.13810779667;
dragonfly_2015[33] = 1;
dragonfly_allocated[33] = 0;
dragonfly_grid_ref[33] = "SJ2463";
dragonfly_details[33] = "Grid reference : SJ2463<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[34] = 53.3656577161;
dragonfly_lon[34] = -3.11355946081;
dragonfly_2015[34] = 1;
dragonfly_allocated[34] = 0;
dragonfly_grid_ref[34] = "SJ2686";
dragonfly_details[34] = "Grid reference : SJ2686<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[35] = 53.0253081917;
dragonfly_lon[35] = -2.97058296714;
dragonfly_2015[35] = 1;
dragonfly_allocated[35] = 0;
dragonfly_grid_ref[35] = "SJ3548";
dragonfly_details[35] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[36] = 53.0976847836;
dragonfly_lon[36] = -2.91247124262;
dragonfly_2015[36] = 1;
dragonfly_allocated[36] = 0;
dragonfly_grid_ref[36] = "SJ3956";
dragonfly_details[36] = "Grid reference : SJ3956<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[37] = 52.686738;
dragonfly_lon[37] = -2.4748312;
dragonfly_2015[37] = 1;
dragonfly_allocated[37] = 0;
dragonfly_grid_ref[37] = "SJ6810";
dragonfly_details[37] = "Grid reference : SJ6810<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[38] = 53.4236821689;
dragonfly_lon[38] = -2.51312008068;
dragonfly_2015[38] = 1;
dragonfly_allocated[38] = 0;
dragonfly_grid_ref[38] = "SJ6692";
dragonfly_details[38] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[39] = 53.316335;
dragonfly_lon[39] = -2.3767204;
dragonfly_2015[39] = 1;
dragonfly_allocated[39] = 0;
dragonfly_grid_ref[39] = "SJ7580";
dragonfly_details[39] = "Grid reference : SJ7580<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[40] = 53.0741901076;
dragonfly_lon[40] = -2.07609135513;
dragonfly_2015[40] = 1;
dragonfly_allocated[40] = 0;
dragonfly_grid_ref[40] = "SJ9553";
dragonfly_details[40] = "Grid reference : SJ9553<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[41] = 53.469736;
dragonfly_lon[41] = -2.0014677;
dragonfly_2015[41] = 1;
dragonfly_allocated[41] = 1;
dragonfly_grid_ref[41] = "SK0097";
dragonfly_details[41] = "Grid reference :SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[42] = 52.1923503245;
dragonfly_lon[42] = -4.10815100409;
dragonfly_2015[42] = 1;
dragonfly_allocated[42] = 0;
dragonfly_grid_ref[42] = "SN5657";
dragonfly_details[42] = "Grid reference : SN5657<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[43] = 52.619598;
dragonfly_lon[43] = -0.89359904;
dragonfly_2015[43] = 1;
dragonfly_allocated[43] = 0;
dragonfly_grid_ref[43] = "SK7503";
dragonfly_details[43] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[44] = 52.662587;
dragonfly_lon[44] = -0.70029281;
dragonfly_2015[44] = 1;
dragonfly_allocated[44] = 0;
dragonfly_grid_ref[44] = "SK8808";
dragonfly_details[44] = "Grid reference : SK8808<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[45] = 52.1690933854;
dragonfly_lon[45] = -4.38491350858;
dragonfly_2015[45] = 1;
dragonfly_allocated[45] = 0;
dragonfly_grid_ref[45] = "SN3755";
dragonfly_details[45] = "Grid reference : SN3755<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[46] = 52.5457764465;
dragonfly_lon[46] = -3.94806516098;
dragonfly_2015[46] = 1;
dragonfly_allocated[46] = 0;
dragonfly_grid_ref[46] = "SN6896";
dragonfly_details[46] = "Grid reference : SN6896<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[47] = 52.402995;
dragonfly_lon[47] = -3.8829137;
dragonfly_2015[47] = 1;
dragonfly_allocated[47] = 0;
dragonfly_grid_ref[47] = "SN7280";
dragonfly_details[47] = "Grid reference : SN7280<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[48] = 52.442629198;
dragonfly_lon[48] = -3.63452120174;
dragonfly_2015[48] = 1;
dragonfly_allocated[48] = 0;
dragonfly_grid_ref[48] = "SN8984";
dragonfly_details[48] = "Grid reference : SN8984<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[49] = 51.8788852824;
dragonfly_lon[49] = -3.42512399392;
dragonfly_2015[49] = 1;
dragonfly_allocated[49] = 0;
dragonfly_grid_ref[49] = "SO0221";
dragonfly_details[49] = "Grid reference : SO0221<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[50] = 52.3644088498;
dragonfly_lon[50] = -3.42601044244;
dragonfly_2015[50] = 1;
dragonfly_allocated[50] = 0;
dragonfly_grid_ref[50] = "SO0375";
dragonfly_details[50] = "Grid reference : SO0375<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[51] = 52.4641369769;
dragonfly_lon[51] = -3.35563025193;
dragonfly_2015[51] = 1;
dragonfly_allocated[51] = 0;
dragonfly_grid_ref[51] = "SO0886";
dragonfly_details[51] = "Grid reference : SO0886<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[52] = 52.0957964621;
dragonfly_lon[52] = -3.32983663302;
dragonfly_2015[52] = 1;
dragonfly_allocated[52] = 0;
dragonfly_grid_ref[52] = "SO0945";
dragonfly_details[52] = "Grid reference : SO0945<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[53] = 52.5284972133;
dragonfly_lon[53] = -3.22493708831;
dragonfly_2015[53] = 1;
dragonfly_allocated[53] = 0;
dragonfly_grid_ref[53] = "SO1793";
dragonfly_details[53] = "Grid reference : SO1793<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[54] = 52.2230462845;
dragonfly_lon[54] = -3.20187369128;
dragonfly_2015[54] = 1;
dragonfly_allocated[54] = 0;
dragonfly_grid_ref[54] = "SO1859";
dragonfly_details[54] = "Grid reference : SO1859<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[55] = 52.330938;
dragonfly_lon[55] = -3.2047588;
dragonfly_2015[55] = 1;
dragonfly_allocated[55] = 0;
dragonfly_grid_ref[55] = "SO1871";
dragonfly_details[55] = "Grid reference : SO1871<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[56] = 52.566926;
dragonfly_lon[56] = -2.9604011;
dragonfly_2015[56] = 1;
dragonfly_allocated[56] = 0;
dragonfly_grid_ref[56] = "SO3597";
dragonfly_details[56] = "Grid reference : SO3597<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[57] = 52.002604;
dragonfly_lon[57] = -2.6569265;
dragonfly_2015[57] = 1;
dragonfly_allocated[57] = 0;
dragonfly_grid_ref[57] = "SO5534";
dragonfly_details[57] = "Grid reference : SO5534<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[58] = 52.183371;
dragonfly_lon[58] = -2.4548225;
dragonfly_2015[58] = 1;
dragonfly_allocated[58] = 0;
dragonfly_grid_ref[58] = "SO6954";
dragonfly_details[58] = "Grid reference : SO6954<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[59] = 52.2013166154;
dragonfly_lon[59] = -2.45502823558;
dragonfly_2015[59] = 1;
dragonfly_allocated[59] = 0;
dragonfly_grid_ref[59] = " SO8390";
dragonfly_details[59] = "Grid reference : SO8390<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[60] = 52.148241;
dragonfly_lon[60] = -2.103717;
dragonfly_2015[60] = 1;
dragonfly_allocated[60] = 0;
dragonfly_grid_ref[60] = " SO9350";
dragonfly_details[60] = "Grid reference : SO9350<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[61] = 52.112301;
dragonfly_lon[61] = -2.074428;
dragonfly_2015[61] = 1;
dragonfly_allocated[61] = 0;
dragonfly_grid_ref[61] = "SO9546";
dragonfly_details[61] = "Grid reference : SO9546<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[62] = 52.498895;
dragonfly_lon[62] = -2.0456206;
dragonfly_2015[62] = 1;
dragonfly_allocated[62] = 0;
dragonfly_grid_ref[62] = "SO9789";
dragonfly_details[62] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[63] = 52.5511248603;
dragonfly_lon[63] = -1.36726662756;
dragonfly_2015[63] = 1;
dragonfly_allocated[63] = 0;
dragonfly_grid_ref[63] = "SP4395";
dragonfly_details[63] = "Grid reference : SP4395<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[64] = 51.7059739276;
dragonfly_lon[64] = -1.36465409396;
dragonfly_2015[64] = 1;
dragonfly_allocated[64] = 0;
dragonfly_grid_ref[64] = "SP4401";
dragonfly_details[64] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[65] = 51.8767961879;
dragonfly_lon[65] = -1.3622492636;
dragonfly_2015[65] = 1;
dragonfly_allocated[65] = 0;
dragonfly_grid_ref[65] = "SP4420";
dragonfly_details[65] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[66] = 52.074543;
dragonfly_lon[66] = -1.3448443;
dragonfly_2015[66] = 1;
dragonfly_allocated[66] = 0;
dragonfly_grid_ref[66] = " SP4542";
dragonfly_details[66] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[67] = 52.334905;
dragonfly_lon[67] = -1.2823008;
dragonfly_2015[67] = 1;
dragonfly_allocated[67] = 0;
dragonfly_grid_ref[67] = " SP4971";
dragonfly_details[67] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[68] = 51.816901;
dragonfly_lon[68] = -0.65222472;
dragonfly_2015[68] = 1;
dragonfly_allocated[68] = 0;
dragonfly_grid_ref[68] = "SP9314";
dragonfly_details[68] = "Grid reference : SP9314<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[69] = 50.9428350041;
dragonfly_lon[69] = -4.5351391786;
dragonfly_2015[69] = 1;
dragonfly_allocated[69] = 0;
dragonfly_grid_ref[69] = "SS2219";
dragonfly_details[69] = "Grid reference : SS2219<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[70] = 51.0162310722;
dragonfly_lon[70] = -3.99732359911;
dragonfly_2015[70] = 1;
dragonfly_allocated[70] = 0;
dragonfly_grid_ref[70] = "SS6026";
dragonfly_details[70] = "Grid reference : SS6026<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[71] = 50.9448176679;
dragonfly_lon[71] = -3.96578895546;
dragonfly_2015[71] = 1;
dragonfly_allocated[71] = 0;
dragonfly_grid_ref[71] = "SS6218";
dragonfly_details[71] = "Grid reference : SS6218<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[72] = 50.9277869015;
dragonfly_lon[72] = -3.90814819152;
dragonfly_2015[72] = 1;
dragonfly_allocated[72] = 0;
dragonfly_grid_ref[72] = "SS6616";
dragonfly_details[72] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[73] = 51.014761;
dragonfly_lon[73] = -3.4982159;
dragonfly_2015[73] = 1;
dragonfly_allocated[73] = 0;
dragonfly_grid_ref[73] = "SS9525";
dragonfly_details[73] = "Grid reference : SS9525<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[74] = 51.4559060421;
dragonfly_lon[74] = -2.07337052562;
dragonfly_2015[74] = 1;
dragonfly_allocated[74] = 0;
dragonfly_grid_ref[74] = "ST9573";
dragonfly_details[74] = "Grid reference : ST9573<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[75] = 51.6263428283;
dragonfly_lon[75] = -1.68359109016;
dragonfly_2015[75] = 1;
dragonfly_allocated[75] = 0;
dragonfly_grid_ref[75] = "SU2292";
dragonfly_details[75] = "Grid reference : SU2292<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[76] = 50.9607812033;
dragonfly_lon[76] = -1.63117650697;
dragonfly_2015[76] = 1;
dragonfly_allocated[76] = 0;
dragonfly_grid_ref[76] = "SU2618";
dragonfly_details[76] = "Grid reference : SU2618<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[77] = 50.8871802393;
dragonfly_lon[77] = -1.27633923263;
dragonfly_2015[77] = 1;
dragonfly_allocated[77] = 0;
dragonfly_grid_ref[77] = "SU5110";
dragonfly_details[77] = "Grid reference : SU5110<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[78] = 51.1553990917;
dragonfly_lon[78] = -1.05766340784;
dragonfly_2015[78] = 1;
dragonfly_allocated[78] = 0;
dragonfly_grid_ref[78] = "SU6640";
dragonfly_details[78] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[79] = 51.314565825;
dragonfly_lon[79] = -0.767428778795;
dragonfly_2015[79] = 1;
dragonfly_allocated[79] = 0;
dragonfly_grid_ref[79] = "SU8658";
dragonfly_details[79] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[80] = 50.836244;
dragonfly_lon[80] = -0.60965864;
dragonfly_2015[80] = 1;
dragonfly_allocated[80] = 0;
dragonfly_grid_ref[80] = " SU9805";
dragonfly_details[80] = "Grid reference : SU9805<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[81] = 50.242064551;
dragonfly_lon[81] = -5.22716181437;
dragonfly_2015[81] = 1;
dragonfly_allocated[81] = 0;
dragonfly_grid_ref[81] = "SW7043";
dragonfly_details[81] = "Grid reference : SW7043<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[82] = 50.4229672212;
dragonfly_lon[82] = -4.84518619362;
dragonfly_2015[82] = 1;
dragonfly_allocated[82] = 0;
dragonfly_grid_ref[82] = "SW9862";
dragonfly_details[82] = "Grid reference : SW9862<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[83] = 50.5726288415;
dragonfly_lon[83] = -4.59995147754;
dragonfly_2015[83] = 1;
dragonfly_allocated[83] = 0;
dragonfly_grid_ref[83] = "SX1678";
dragonfly_details[83] = "Grid reference : SX1678<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[84] = 50.779579;
dragonfly_lon[84] = -2.6821859;
dragonfly_2015[84] = 1;
dragonfly_allocated[84] = 0;
dragonfly_grid_ref[84] = "SY5298";
dragonfly_details[84] = "Grid reference : SY5298<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[85] = 50.6637838472;
dragonfly_lon[85] = -1.5627623943;
dragonfly_2015[85] = 1;
dragonfly_allocated[85] = 0;
dragonfly_grid_ref[85] = "SZ3185";
dragonfly_details[85] = "Grid reference : SZ3185<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[86] = 54.0083437589;
dragonfly_lon[86] = -0.475581682379;
dragonfly_2015[86] = 1;
dragonfly_allocated[86] = 0;
dragonfly_grid_ref[86] = "TA0058";
dragonfly_details[86] = "Grid reference : TA0058<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[87] = 54.3677174898;
dragonfly_lon[87] = -0.462299842079;
dragonfly_2015[87] = 1;
dragonfly_allocated[87] = 1;
dragonfly_grid_ref[87] = "TA0098";
dragonfly_details[87] = "Grid reference : TA0098<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[88] = 54.2054089071;
dragonfly_lon[88] = -0.4223360298;
dragonfly_2015[88] = 1;
dragonfly_allocated[88] = 1;
dragonfly_grid_ref[88] = "TA0380";
dragonfly_details[88] = "Grid reference : TA0380<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[89] = 54.139066;
dragonfly_lon[89] = -0.17995673;
dragonfly_2015[89] = 1;
dragonfly_allocated[89] = 0;
dragonfly_grid_ref[89] = "TA1973";
dragonfly_details[89] = "Grid reference : TA1973<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[90] = 52.0124633685;
dragonfly_lon[90] = -0.471484433724;
dragonfly_2015[90] = 1;
dragonfly_allocated[90] = 0;
dragonfly_grid_ref[90] = "TL0536";
dragonfly_details[90] = "Grid reference : TL0536<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[91] = 52.569311;
dragonfly_lon[91] = -0.42270311;
dragonfly_2015[91] = 1;
dragonfly_allocated[91] = 0;
dragonfly_grid_ref[91] = " TL0798";
dragonfly_details[91] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[92] = 52.2182007512;
dragonfly_lon[92] = -0.391234905322;
dragonfly_2015[92] = 1;
dragonfly_allocated[92] = 0;
dragonfly_grid_ref[92] = "TL1059";
dragonfly_details[92] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[93] = 51.9241285923;
dragonfly_lon[93] = 0.0199916865488;
dragonfly_2015[93] = 1;
dragonfly_allocated[93] = 0;
dragonfly_grid_ref[93] = "TL3927";
dragonfly_details[93] = "Grid reference : TL3927<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[94] = 51.4647362637;
dragonfly_lon[94] = -0.533046978082;
dragonfly_2015[94] = 1;
dragonfly_allocated[94] = 0;
dragonfly_grid_ref[94] = "TQ0275";
dragonfly_details[94] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[95] = 50.8388677028;
dragonfly_lon[95] = -0.1550738877;
dragonfly_2015[95] = 1;
dragonfly_allocated[95] = 0;
dragonfly_grid_ref[95] = "TQ3006";
dragonfly_details[95] = "Grid reference : TQ3006<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[96] = 50.760898;
dragonfly_lon[96] = 0.19633483;
dragonfly_2015[96] = 1;
dragonfly_allocated[96] = 0;
dragonfly_grid_ref[96] = "TV5598";
dragonfly_details[96] = "Grid reference : TV5598<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

dragonfly_lat[97] = 53.316872;
dragonfly_lon[97] = -1.8813774;
dragonfly_2015[97] = 0;
dragonfly_allocated[97] = 0;
dragonfly_grid_ref[97] = "SK0880";
dragonfly_details[97] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[98] = 53.163989;
dragonfly_lon[98] = -1.8219699;
dragonfly_2015[98] = 0;
dragonfly_allocated[98] = 0;
dragonfly_grid_ref[98] = "SK1263";
dragonfly_details[98] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[99] = 53.412407;
dragonfly_lon[99] = -1.098807;
dragonfly_2015[99] = 0;
dragonfly_allocated[99] = 0;
dragonfly_grid_ref[99] = "SK6091";
dragonfly_details[99] = "Grid reference : SK6091<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[100] = 53.483589;
dragonfly_lon[100] = -1.0068801;
dragonfly_2015[100] = 0;
dragonfly_allocated[100] = 0;
dragonfly_grid_ref[100] = "SK6699";
dragonfly_details[100] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[101] = 52.890163;
dragonfly_lon[101] = -0.99076713;
dragonfly_2015[101] = 0;
dragonfly_allocated[101] = 0;
dragonfly_grid_ref[101] = "SK6833";
dragonfly_details[101] = "Grid reference : SK6833<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[102] = 51.840874;
dragonfly_lon[102] = -4.9772323;
dragonfly_2015[102] = 0;
dragonfly_allocated[102] = 0;
dragonfly_grid_ref[102] = "SM9520";
dragonfly_details[102] = "Grid reference : SM9520<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[103] = 51.950078;
dragonfly_lon[103] = -4.9262472;
dragonfly_2015[103] = 0;
dragonfly_allocated[103] = 0;
dragonfly_grid_ref[103] = "SM9932";
dragonfly_details[103] = "Grid reference : SM9932<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[104] = 51.844256;
dragonfly_lon[104] = -4.4402295;
dragonfly_2015[104] = 0;
dragonfly_allocated[104] = 0;
dragonfly_grid_ref[104] = "SN3219";
dragonfly_details[104] = "Grid reference : SN3219<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

dragonfly_lat[105] = 51.730948;
dragonfly_lon[105] = -4.2603315;
dragonfly_2015[105] = 0;
dragonfly_allocated[105] = 0;
dragonfly_grid_ref[105] = "SN4406";
dragonfly_details[105] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[106] = 51.961044;
dragonfly_lon[106] = -3.9662199;
dragonfly_2015[106] = 0;
dragonfly_allocated[106] = 0;
dragonfly_grid_ref[106] = "SN6531";
dragonfly_details[106] = "Grid reference : SN6531<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

dragonfly_lat[107] = 51.727657;
dragonfly_lon[107] = -3.9415926;
dragonfly_2015[107] = 0;
dragonfly_allocated[107] = 0;
dragonfly_grid_ref[107] = "SN6605";
dragonfly_details[107] = "Grid reference : SN6605<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[108] = 51.720526;
dragonfly_lon[108] = -3.8254635;
dragonfly_2015[108] = 0;
dragonfly_allocated[108] = 0;
dragonfly_grid_ref[108] = "SN7404";
dragonfly_details[108] = "Grid reference : SN7404<BR>County : Castell-nedd Port Talbot - Neath Port Talbot<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[109] = 51.900703;
dragonfly_lon[109] = -3.8036891;
dragonfly_2015[109] = 0;
dragonfly_allocated[109] = 0;
dragonfly_grid_ref[109] = "SN7624";
dragonfly_details[109] = "Grid reference : SN7624<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[110] = 51.798031;
dragonfly_lon[110] = -3.4225284;
dragonfly_2015[110] = 0;
dragonfly_allocated[110] = 0;
dragonfly_grid_ref[110] = "SO0212";
dragonfly_details[110] = "Grid reference : SO0212<BR>County : Merthyr Tudful - Merthyr Tydfil<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[111] = 51.857015;
dragonfly_lon[111] = -2.916167;
dragonfly_2015[111] = 0;
dragonfly_allocated[111] = 0;
dragonfly_grid_ref[111] = "SO3718";
dragonfly_details[111] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[112] = 51.812397;
dragonfly_lon[112] = -2.8717438;
dragonfly_2015[112] = 0;
dragonfly_allocated[112] = 0;
dragonfly_grid_ref[112] = "SO4013";
dragonfly_details[112] = "Grid reference : SO4013<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[113] = 51.741636;
dragonfly_lon[113] = -2.6965827;
dragonfly_2015[113] = 0;
dragonfly_allocated[113] = 0;
dragonfly_grid_ref[113] = "SO5205";
dragonfly_details[113] = "Grid reference : SO5205<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[114] = 51.813559;
dragonfly_lon[114] = -2.6976914;
dragonfly_2015[114] = 0;
dragonfly_allocated[114] = 0;
dragonfly_grid_ref[114] = "SO5213";
dragonfly_details[114] = "Grid reference : SO5213<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[115] = 51.833458;
dragonfly_lon[115] = -2.1900643;
dragonfly_2015[115] = 0;
dragonfly_allocated[115] = 0;
dragonfly_grid_ref[115] = "SO8715";
dragonfly_details[115] = "Grid reference : SO8715<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[116] = 51.579845;
dragonfly_lon[116] = -4.1662199;
dragonfly_2015[116] = 0;
dragonfly_allocated[116] = 0;
dragonfly_grid_ref[116] = "SS5089";
dragonfly_details[116] = "Grid reference : SS5089<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[117] = 51.464384;
dragonfly_lon[117] = -3.4985023;
dragonfly_2015[117] = 0;
dragonfly_allocated[117] = 0;
dragonfly_grid_ref[117] = "SS9675";
dragonfly_details[117] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[118] = 51.429151;
dragonfly_lon[118] = -3.4398094;
dragonfly_2015[118] = 0;
dragonfly_allocated[118] = 0;
dragonfly_grid_ref[118] = "ST0071";
dragonfly_details[118] = "Grid reference : ST0071<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[119] = 51.465628;
dragonfly_lon[119] = -3.3977686;
dragonfly_2015[119] = 0;
dragonfly_allocated[119] = 0;
dragonfly_grid_ref[119] = "ST0375";
dragonfly_details[119] = "Grid reference : ST0375<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

dragonfly_lat[120] = 51.169325;
dragonfly_lon[120] = -3.360182;
dragonfly_2015[120] = 0;
dragonfly_allocated[120] = 0;
dragonfly_grid_ref[120] = "ST0542";
dragonfly_details[120] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[121] = 51.585844;
dragonfly_lon[121] = -3.0839063;
dragonfly_2015[121] = 0;
dragonfly_allocated[121] = 0;
dragonfly_grid_ref[121] = "ST2588";
dragonfly_details[121] = "Grid reference : ST2588<BR>County : Casnewydd - Newport<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[122] = 51.301708;
dragonfly_lon[122] = -2.5751468;
dragonfly_2015[122] = 0;
dragonfly_allocated[122] = 0;
dragonfly_grid_ref[122] = "ST6056";
dragonfly_details[122] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[123] = 51.284492;
dragonfly_lon[123] = -2.388528;
dragonfly_2015[123] = 0;
dragonfly_allocated[123] = 0;
dragonfly_grid_ref[123] = "ST7354";
dragonfly_details[123] = "Grid reference : ST7354<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[124] = 53.333101;
dragonfly_lon[124] = -0.39466768;
dragonfly_2015[124] = 0;
dragonfly_allocated[124] = 0;
dragonfly_grid_ref[124] = "TF0783";
dragonfly_details[124] = "Grid reference : TF0783<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[125] = 53.332898;
dragonfly_lon[125] = -0.37965746;
dragonfly_2015[125] = 0;
dragonfly_allocated[125] = 0;
dragonfly_grid_ref[125] = "TF0883";
dragonfly_details[125] = "Grid reference : TF0883<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[126] = 52.595469;
dragonfly_lon[126] = -0.36270666;
dragonfly_2015[126] = 0;
dragonfly_allocated[126] = 0;
dragonfly_grid_ref[126] = "TF1101";
dragonfly_details[126] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[127] = 53.368007;
dragonfly_lon[127] = -0.31820437;
dragonfly_2015[127] = 0;
dragonfly_allocated[127] = 0;
dragonfly_grid_ref[127] = "TF1287";
dragonfly_details[127] = "Grid reference : TF1287<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[128] = 52.592888;
dragonfly_lon[128] = -0.18563893;
dragonfly_2015[128] = 0;
dragonfly_allocated[128] = 0;
dragonfly_grid_ref[128] = "TF2301";
dragonfly_details[128] = "Grid reference : TF2301<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[129] = 52.661163;
dragonfly_lon[129] = 0.038994002;
dragonfly_2015[129] = 0;
dragonfly_allocated[129] = 0;
dragonfly_grid_ref[129] = "TF3809";
dragonfly_details[129] = "Grid reference : TF3809<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[130] = 52.992779;
dragonfly_lon[130] = 0.099284333;
dragonfly_2015[130] = 0;
dragonfly_allocated[130] = 0;
dragonfly_grid_ref[130] = "TF4146";
dragonfly_details[130] = "Grid reference : TF4146<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[131] = 53.108215;
dragonfly_lon[131] = 0.17960638;
dragonfly_2015[131] = 0;
dragonfly_allocated[131] = 0;
dragonfly_grid_ref[131] = "TF4659";
dragonfly_details[131] = "Grid reference : TF4659<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[132] = 53.29629;
dragonfly_lon[132] = 0.21918516;
dragonfly_2015[132] = 0;
dragonfly_allocated[132] = 0;
dragonfly_grid_ref[132] = "TF4880";
dragonfly_details[132] = "Grid reference : TF4880<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[133] = 52.641836;
dragonfly_lon[133] = 0.57023036;
dragonfly_2015[133] = 0;
dragonfly_allocated[133] = 0;
dragonfly_grid_ref[133] = "TF7408";
dragonfly_details[133] = "Grid reference : TF7408<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[134] = 52.599147;
dragonfly_lon[134] = 0.86309696;
dragonfly_2015[134] = 0;
dragonfly_allocated[134] = 0;
dragonfly_grid_ref[134] = "TF9404";
dragonfly_details[134] = "Grid reference : TF9404<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[135] = 52.718097;
dragonfly_lon[135] = 1.137457;
dragonfly_2015[135] = 0;
dragonfly_allocated[135] = 0;
dragonfly_grid_ref[135] = "TG1218";
dragonfly_details[135] = "Grid reference : TG1218<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[136] = 51.708771;
dragonfly_lon[136] = -0.004118918;
dragonfly_2015[136] = 0;
dragonfly_allocated[136] = 0;
dragonfly_grid_ref[136] = "TL3803";
dragonfly_details[136] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[137] = 52.013267;
dragonfly_lon[137] = 0.067695002;
dragonfly_2015[137] = 0;
dragonfly_allocated[137] = 0;
dragonfly_grid_ref[137] = "TL4237";
dragonfly_details[137] = "Grid reference : TL4237<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[138] = 52.296979;
dragonfly_lon[138] = 0.28620994;
dragonfly_2015[138] = 0;
dragonfly_allocated[138] = 0;
dragonfly_grid_ref[138] = "TL5669";
dragonfly_details[138] = "Grid reference : TL5669<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[139] = 52.172896;
dragonfly_lon[139] = 0.63086107;
dragonfly_2015[139] = 0;
dragonfly_allocated[139] = 0;
dragonfly_grid_ref[139] = "TL8056";
dragonfly_details[139] = "Grid reference : TL8056<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[140] = 52.298627;
dragonfly_lon[140] = 0.63830969;
dragonfly_2015[140] = 0;
dragonfly_allocated[140] = 0;
dragonfly_grid_ref[140] = "TL8070";
dragonfly_details[140] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[141] = 52.03074;
dragonfly_lon[141] = 1.278641;
dragonfly_2015[141] = 0;
dragonfly_allocated[141] = 0;
dragonfly_grid_ref[141] = "TM2542";
dragonfly_details[141] = "Grid reference : TM2542<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[142] = 52.147898;
dragonfly_lon[142] = 1.5796635;
dragonfly_2015[142] = 0;
dragonfly_allocated[142] = 0;
dragonfly_grid_ref[142] = "TM4556";
dragonfly_details[142] = "Grid reference : TM4556<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[143] = 51.597876;
dragonfly_lon[143] = 0.16428629;
dragonfly_2015[143] = 0;
dragonfly_allocated[143] = 0;
dragonfly_grid_ref[143] = "TQ5091";
dragonfly_details[143] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[144] = 51.546374;
dragonfly_lon[144] = 0.49358131;
dragonfly_2015[144] = 0;
dragonfly_allocated[144] = 0;
dragonfly_grid_ref[144] = "TQ7386";
dragonfly_details[144] = "Grid reference : TQ7386<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[145] = 51.456238;
dragonfly_lon[145] = 0.50305999;
dragonfly_2015[145] = 0;
dragonfly_allocated[145] = 0;
dragonfly_grid_ref[145] = "TQ7476";
dragonfly_details[145] = "Grid reference : TQ7476<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[146] = 51.463663;
dragonfly_lon[146] = 0.5754557;
dragonfly_2015[146] = 0;
dragonfly_allocated[146] = 0;
dragonfly_grid_ref[146] = "TQ7977";
dragonfly_details[146] = "Grid reference : TQ7977<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[147] = 51.148815;
dragonfly_lon[147] = 0.95828535;
dragonfly_2015[147] = 0;
dragonfly_allocated[147] = 0;
dragonfly_grid_ref[147] = "TR0743";
dragonfly_details[147] = "Grid reference : TR0743<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[148] = 51.300375;
dragonfly_lon[148] = 1.0110682;
dragonfly_2015[148] = 0;
dragonfly_allocated[148] = 0;
dragonfly_grid_ref[148] = "TR1060";
dragonfly_details[148] = "Grid reference : TR1060<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[149] = 53.741298;
dragonfly_lon[149] = -0.69757027;
dragonfly_2015[149] = 0;
dragonfly_allocated[149] = 0;
dragonfly_grid_ref[149] = "SE8628";
dragonfly_details[149] = "Grid reference : SE8628<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
dragonfly_lat[150] = 53.14874;
dragonfly_lon[150] = -4.4088966;
dragonfly_2015[150] = 0;
dragonfly_allocated[150] = 0;
dragonfly_grid_ref[150] = "SH3964";
dragonfly_details[150] = "Grid reference : SH3964<BR>County : Isle of Anglesey - Ynys Môn<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"




//Toads:
toad_lat[0] = 54.4307628475;
toad_lon[0] = -3.527659312;
toad_2015[0] = 1;
toad_allocated[0] = 0;
toad_grid_ref[0] = "NY0105";
toad_details[0] = "Grid reference : NY0105<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[1] = 54.64376;
toad_lon[1] = -2.9002533;
toad_2015[1] = 1;
toad_allocated[1] = 0;
toad_grid_ref[1] = "NY4228";
toad_details[1] = "Grid reference : NY4228<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[2] = 54.896413;
toad_lon[2] = -2.7499553;
toad_2015[2] = 1;
toad_allocated[2] = 1;
toad_grid_ref[2] = "NY5256";
toad_details[2] = "Grid reference : NY5256<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[3] = 54.772291;
toad_lon[3] = -2.3901317;
toad_2015[3] = 1;
toad_allocated[3] = 0;
toad_grid_ref[3] = "NY7542";
toad_details[3] = "Grid reference : NY7542<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[4] = 51.149889;
toad_lon[4] = 0.52934289;
toad_2015[4] = 0;
toad_allocated[4] = 0;
toad_grid_ref[4] = "TQ7742";
toad_details[4] = "Grid reference : TQ7742<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[5] = 54.032026;
toad_lon[5] = -1.0243945;
toad_2015[5] = 1;
toad_allocated[5] = 1;
toad_grid_ref[5] = "SE6460";
toad_details[5] = "Grid reference : SE6460<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[6] = 54.404103;
toad_lon[6] = -2.2941978;
toad_2015[6] = 1;
toad_allocated[6] = 0;
toad_grid_ref[6] = "NY8101";
toad_details[6] = "Grid reference : NY8101<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[7] = 54.6740362298;
toad_lon[7] = -1.89296706473;
toad_2015[7] = 1;
toad_allocated[7] = 0;
toad_grid_ref[7] = "NZ0731";
toad_details[7] = "Grid reference : NZ0731<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[8] = 53.999383;
toad_lon[8] = -1.6048597;
toad_2015[8] = 1;
toad_allocated[8] = 0;
toad_grid_ref[8] = "NZ0912";
toad_details[8] = "Grid reference : NZ0912<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[9] = 54.655874;
toad_lon[9] = -1.7690198;
toad_2015[9] = 1;
toad_allocated[9] = 0;
toad_grid_ref[9] = "NZ1529";
toad_details[9] = "Grid reference : NZ1529<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[10] = 54.916381;
toad_lon[10] = -1.7207325;
toad_2015[10] = 1;
toad_allocated[10] = 0;
toad_grid_ref[10] = "NZ1858";
toad_details[10] = "Grid reference : NZ1858<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[11] = 53.816102;
toad_lon[11] = -0.99903734;
toad_2015[11] = 1;
toad_allocated[11] = 1;
toad_grid_ref[11] = "SE6636";
toad_details[11] = "Grid reference : SE6636<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[12] = 52.822438;
toad_lon[12] = -2.1498377;
toad_2015[12] = 1;
toad_allocated[12] = 1;
toad_grid_ref[12] = "SJ9025";
toad_details[12] = "Grid reference : SJ9025<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[13] = 52.561470;
toad_lon[13] = -1.7064042;
toad_2015[13] = 1;
toad_allocated[13] = 0;
toad_grid_ref[13] = "SP2096";
toad_details[13] = "Grid reference : SP2096<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[14] = 54.3476796968;
toad_lon[14] = -2.83224869978;
toad_2015[14] = 1;
toad_allocated[14] = 0;
toad_grid_ref[14] = "SD4695";
toad_details[14] = "Grid reference : SD4695<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[15] = 53.657788;
toad_lon[15] = -2.4100231;
toad_2015[15] = 1;
toad_allocated[15] = 0;
toad_grid_ref[15] = "SD7318";
toad_details[15] = "Grid reference : SD7318<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[16] = 52.417948;
toad_lon[16] = -2.1043502;
toad_2015[16] = 1;
toad_allocated[16] = 1;
toad_grid_ref[16] = "SO9380";
toad_details[16] = "Grid reference : SO9380<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[17] = 53.5680016253;
toad_lon[17] = -2.37896769846;
toad_2015[17] = 1;
toad_allocated[17] = 0;
toad_grid_ref[17] = "SD7508";
toad_details[17] = "Grid reference : SD7508<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[18] = 52.183371;
toad_lon[18] = -2.4548225;
toad_2015[18] = 1;
toad_allocated[18] = 1;
toad_grid_ref[18] = "SO6954";
toad_details[18] = "Grid reference : SO6954<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[19] = 53.810945;
toad_lon[19] = -1.7129387;
toad_2015[19] = 1;
toad_allocated[19] = 0;
toad_grid_ref[19] = "SE1935";
toad_details[19] = "Grid reference : SE1935<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[20] = 52.776800;
toad_lon[20] = -2.4313387;
toad_2015[20] = 1;
toad_allocated[20] = 1;
toad_grid_ref[20] = "SJ7120";
toad_details[20] = "Grid reference : SJ7120<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[21] = 50.902296;
toad_lon[21] = -0.18103041;
toad_2015[21] = 1;
toad_allocated[21] = 0;
toad_grid_ref[21] = "TQ2813";
toad_details[21] = "Grid reference : TQ2813<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[22] = 54.0405025302;
toad_lon[22] = -0.963093743651;
toad_2015[22] = 1;
toad_allocated[22] = 0;
toad_grid_ref[22] = "SE6861";
toad_details[22] = "Grid reference : SE6861<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[23] = 54.0284966232;
toad_lon[23] = -0.658053447978;
toad_2015[23] = 1;
toad_allocated[23] = 0;
toad_grid_ref[23] = "SE8860";
toad_details[23] = "Grid reference : SE8860<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[24] = 53.9639911006;
toad_lon[24] = -0.522932667049;
toad_2015[24] = 1;
toad_allocated[24] = 0;
toad_grid_ref[24] = "SE9753";
toad_details[24] = "Grid reference : SE9753<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[25] = 54.952318;
toad_lon[25] = -2.282578;
toad_2015[25] = 1;
toad_allocated[25] = 0;
toad_grid_ref[25] = "NY8262";
toad_details[25] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[26] = 53.3921210935;
toad_lon[26] = -4.37755850085;
toad_2015[26] = 1;
toad_allocated[26] = 0;
toad_grid_ref[26] = "SH4291";
toad_details[26] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[27] = 53.4236821689;
toad_lon[27] = -2.51312008068;
toad_2015[27] = 1;
toad_allocated[27] = 0;
toad_grid_ref[27] = "SJ6692";
toad_details[27] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[28] = 53.316335;
toad_lon[28] = -2.3767204;
toad_2015[28] = 1;
toad_allocated[28] = 0;
toad_grid_ref[28] = "SJ7580";
toad_details[28] = "Grid reference : SJ7580<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[29] = 53.469736;
toad_lon[29] = -2.0014677;
toad_2015[29] = 1;
toad_allocated[29] = 0;
toad_grid_ref[29] = "SK0097";
toad_details[29] = "Grid reference : SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[30] = 52.6517018;
toad_lon[30] = -1.97188173971;
toad_2015[30] = 1;
toad_allocated[30] = 0;
toad_grid_ref[30] = "SK0206";
toad_details[30] = "Grid reference : SK0206<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[31] = 53.3168599109;
toad_lon[31] = -1.8813815622;
toad_2015[31] = 1;
toad_allocated[31] = 1;
toad_grid_ref[31] = "SK0880";
toad_details[31] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[32] = 55.141288;
toad_lon[32] = -2.1270385;
toad_2015[32] = 1;
toad_allocated[32] = 0;
toad_grid_ref[32] = "NY9283";
toad_details[32] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[33] = 54.88073;
toad_lon[33] = -2.0794578;
toad_2015[33] = 1;
toad_allocated[33] = 1;
toad_grid_ref[33] = "NY9554";
toad_details[33] = "Grid reference : NY9554<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[34] = 54.609586;
toad_lon[34] = -1.3822216;
toad_2015[34] = 1;
toad_allocated[34] = 0;
toad_grid_ref[34] = "NZ4024";
toad_details[34] = "Grid reference : NZ4024<BR>County : Cleveland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[35] = 53.563654;
toad_lon[35] = -3.0885281;
toad_2015[35] = 1;
toad_allocated[35] = 0;
toad_grid_ref[35] = "SD2808";
toad_details[35] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[36] = 53.762403;
toad_lon[36] = -2.9723058;
toad_2015[36] = 1;
toad_allocated[36] = 0;
toad_grid_ref[36] = "SD3630";
toad_details[36] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[37] = 54.089552;
toad_lon[37] = -2.2919661;
toad_2015[37] = 1;
toad_allocated[37] = 0;
toad_grid_ref[37] = "SD8166";
toad_details[37] = "Grid reference : SD8166<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[38] = 53.855807;
toad_lon[38] = -1.6822265;
toad_2015[38] = 1;
toad_allocated[38] = 0;
toad_grid_ref[38] = "SE2140";
toad_details[38] = "Grid reference : SN4406<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[39] = 52.1923503245;
toad_lon[39] = -4.10815100409;
toad_2015[39] = 1;
toad_allocated[39] = 0;
toad_grid_ref[39] = "SN5657";
toad_details[39] = "Grid reference : SN5657<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[40] = 52.5457764465;
toad_lon[40] = -3.94806516098;
toad_2015[40] = 1;
toad_allocated[40] = 0;
toad_grid_ref[40] = "SN6896";
toad_details[40] = "Grid reference : SN6896<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[41] = 53.14006;
toad_lon[41] = -4.3934582;
toad_2015[41] = 1;
toad_allocated[41] = 0;
toad_grid_ref[41] = "SH4063";
toad_details[41] = "Grid reference : SH4063<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[42] = 51.7784701383;
toad_lon[42] = -1.47959747294;
toad_2015[42] = 1;
toad_allocated[42] = 1;
toad_grid_ref[42] = "SP3609";
toad_details[42] = "Grid reference : SP3609<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[43] = 51.7059739276;
toad_lon[43] = -1.36465409396;
toad_2015[43] = 1;
toad_allocated[43] = 0;
toad_grid_ref[43] = "SP4401";
toad_details[43] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[44] = 51.8767961879;
toad_lon[44] = -1.3622492636;
toad_2015[44] = 1;
toad_allocated[44] = 0;
toad_grid_ref[44] = "SP4420";
toad_details[44] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[45] = 52.5666817119;
toad_lon[45] = -1.01295144901;
toad_2015[45] = 1;
toad_allocated[45] = 0;
toad_grid_ref[45] = "SP6797";
toad_details[45] = "Grid reference : SP6797<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[46] = 52.3598154038;
toad_lon[46] = -1.00288270671;
toad_2015[46] = 1;
toad_allocated[46] = 0;
toad_grid_ref[46] = "SP6874";
toad_details[46] = "Grid reference : SP6874<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[47] = 52.0057800461;
toad_lon[47] = -0.661114083564;
toad_2015[47] = 1;
toad_allocated[47] = 0;
toad_grid_ref[47] = "SP9235";
toad_details[47] = "Grid reference : SP9235<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[48] = 50.9350725214;
toad_lon[48] = -4.47778083555;
toad_2015[48] = 1;
toad_allocated[48] = 0;
toad_grid_ref[48] = "SS2618";
toad_details[48] = "Grid reference : SS2618<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[49] = 50.8907510541;
toad_lon[49] = -4.44698647313;
toad_2015[49] = 1;
toad_allocated[49] = 0;
toad_grid_ref[49] = "SS2813";
toad_details[49] = "Grid reference : SS2813<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[50] = 50.7925121087;
toad_lon[50] = -4.41346978912;
toad_2015[50] = 1;
toad_allocated[50] = 0;
toad_grid_ref[50] = "SS3002";
toad_details[50] = "Grid reference : SS3002<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[51] = 53.186515;
toad_lon[51] = -3.7973339;
toad_2015[51] = 1;
toad_allocated[51] = 0;
toad_grid_ref[51] = "SH8067";
toad_details[51] = "Grid reference : SH8067<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[52] = 53.06994;
toad_lon[52] = -3.777548;
toad_2015[52] = 1;
toad_allocated[52] = 0;
toad_grid_ref[52] = "SH8154";
toad_details[52] = "Grid reference : SH8154<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[53] = 50.9522991951;
toad_lon[53] = -2.12952067536;
toad_2015[53] = 1;
toad_allocated[53] = 0;
toad_grid_ref[53] = "ST9117";
toad_details[53] = "Grid reference : ST9117<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[54] = 51.6263428283;
toad_lon[54] = -1.68359109016;
toad_2015[54] = 1;
toad_allocated[54] = 0;
toad_grid_ref[54] = "SU2292";
toad_details[54] = "Grid reference : SU2292<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[55] = 50.4229672212;
toad_lon[55] = -4.84518619362;
toad_2015[55] = 1;
toad_allocated[55] = 0;
toad_grid_ref[55] = "SW9862";
toad_details[55] = "Grid reference : SW9862<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[56] = 50.6469713268;
toad_lon[56] = -4.49088091305;
toad_2015[56] = 1;
toad_allocated[56] = 0;
toad_grid_ref[56] = "SX2486";
toad_details[56] = "Grid reference : SX2486<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[57] = 50.4105656089;
toad_lon[57] = -4.16879292343;
toad_2015[57] = 1;
toad_allocated[57] = 0;
toad_grid_ref[57] = "SX4659";
toad_details[57] = "Grid reference : SX4659<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[58] = 50.6855036745;
toad_lon[58] = -3.19047034535;
toad_2015[58] = 1;
toad_allocated[58] = 0;
toad_grid_ref[58] = "SY1688";
toad_details[58] = "Grid reference : SY1688<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[59] = 50.7165708365;
toad_lon[59] = -2.68130568265;
toad_2015[59] = 1;
toad_allocated[59] = 0;
toad_grid_ref[59] = "SY5291";
toad_details[59] = "Grid reference : SY5291<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[60] = 53.290773;
toad_lon[60] = -3.3966267;
toad_2015[60] = 1;
toad_allocated[60] = 0;
toad_grid_ref[60] = "SJ0778";
toad_details[60] = "Grid reference : TA3200<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[61] = 52.717264;
toad_lon[61] = -3.2301834;
toad_2015[61] = 1;
toad_allocated[61] = 0;
toad_grid_ref[61] = "SJ1714";
toad_details[61] = "Grid reference : SJ1714<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[62] = 53.238825;
toad_lon[62] = -3.2151229;
toad_2015[62] = 1;
toad_allocated[62] = 0;
toad_grid_ref[62] = "SJ1972";
toad_details[62] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[63] = 53.203179;
toad_lon[63] = -3.1841708;
toad_2015[63] = 1;
toad_allocated[63] = 0;
toad_grid_ref[63] = "SJ2168";
toad_details[63] = "Grid reference : SJ2168<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[64] = 52.67307;
toad_lon[64] = -3.1549924;
toad_2015[64] = 1;
toad_allocated[64] = 0;
toad_grid_ref[64] = "SJ2209";
toad_details[64] = "Grid reference : SJ2209<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[65] = 52.736128;
toad_lon[65] = -3.141848;
toad_2015[65] = 1;
toad_allocated[65] = 0;
toad_grid_ref[65] = "SJ2316";
toad_details[65] = "Grid reference : SJ2316<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[66] = 53.059679;
toad_lon[66] = -3.1503872;
toad_2015[66] = 1;
toad_allocated[66] = 0;
toad_grid_ref[66] = "SJ2352";
toad_details[66] = "Grid reference : SJ2352<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[67] = 53.025324;
toad_lon[67] = -2.9705549;
toad_2015[67] = 1;
toad_allocated[67] = 0;
toad_grid_ref[67] = "SJ3548";
toad_details[67] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[68] = 52.685086;
toad_lon[68] = -2.7854709;
toad_2015[68] = 1;
toad_allocated[68] = 1;
toad_grid_ref[68] = "SJ4710";
toad_details[68] = "Grid reference : SJ4710<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[69] = 52.650658;
toad_lon[69] = -2.5040031;
toad_2015[69] = 1;
toad_allocated[69] = 1;
toad_grid_ref[69] = "SJ6606";
toad_details[69] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[70] = 52.619598;
toad_lon[70] = -0.89359904;
toad_2015[70] = 1;
toad_allocated[70] = 0;
toad_grid_ref[70] = "SK7503";
toad_details[70] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[71] = 51.4647362637;
toad_lon[71] = -0.533046978082;
toad_2015[71] = 1;
toad_allocated[71] = 0;
toad_grid_ref[71] = "TQ0275";
toad_details[71] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[72] = 51.3194249385;
toad_lon[72] = -0.422880262604;
toad_2015[72] = 1;
toad_allocated[72] = 0;
toad_grid_ref[72] = "TQ1059";
toad_details[72] = "Grid reference : TQ1059<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[73] = 52.095831;
toad_lon[73] = -3.3297965;
toad_2015[73] = 1;
toad_allocated[73] = 0;
toad_grid_ref[73] = "SO0945";
toad_details[73] = "Grid reference : SO0945<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[74] = 52.528523;
toad_lon[74] = -3.2249012;
toad_2015[74] = 1;
toad_allocated[74] = 0;
toad_grid_ref[74] = "SO1793";
toad_details[74] = "Grid reference : SO1793<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[75] = 50.8414340093;
toad_lon[75] = 0.21434465248;
toad_2015[75] = 1;
toad_allocated[75] = 0;
toad_grid_ref[75] = "TQ5607";
toad_details[75] = "Grid reference : TQ5607<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[76] = 52.223078;
toad_lon[76] = -3.2018367;
toad_2015[76] = 1;
toad_allocated[76] = 0;
toad_grid_ref[76] = "SO1859";
toad_details[76] = "Grid reference : SO1859<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[77] = 52.112301;
toad_lon[77] = -2.0744280;
toad_2015[77] = 1;
toad_allocated[77] = 1;
toad_grid_ref[77] = "SO9546";
toad_details[77] = "Grid reference : SO9546<BR>County : Worchestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[78] = 52.330938;
toad_lon[78] = -3.2047588;
toad_2015[78] = 1;
toad_allocated[78] = 0;
toad_grid_ref[78] = "SO1871";
toad_details[78] = "Grid reference : SO1871<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[79] = 52.507625;
toad_lon[79] = -2.2518965;
toad_2015[79] = 1;
toad_allocated[79] = 1;
toad_grid_ref[79] = "SO8390";
toad_details[79] = "Grid reference : SO8390<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[80] = 52.498828;
toad_lon[80] = -2.1340029;
toad_2015[80] = 1;
toad_allocated[80] = 1;
toad_grid_ref[80] = "SO9189";
toad_details[80] = "Grid reference : SO9189<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[81] = 52.498895;
toad_lon[81] = -2.0456206;
toad_2015[81] = 1;
toad_allocated[81] = 0;
toad_grid_ref[81] = "SO9789";
toad_details[81] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[82] = 52.334905;
toad_lon[82] = -1.2823008;
toad_2015[82] = 1;
toad_allocated[82] = 1;
toad_grid_ref[82] = "SP4971";
toad_details[82] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[83] = 50.927845;
toad_lon[83] = -3.9080912;
toad_2015[83] = 1;
toad_allocated[83] = 1;
toad_grid_ref[83] = "SS6616";
toad_details[83] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[84] = 50.96097;
toad_lon[84] = -1.6738794;
toad_2015[84] = 1;
toad_allocated[84] = 1;
toad_grid_ref[84] = "SU2318";
toad_details[84] = "Grid reference : SU2318<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[85] = 50.834759;
toad_lon[85] = -1.5753559;
toad_2015[85] = 1;
toad_allocated[85] = 1;
toad_grid_ref[85] = "SU3004";
toad_details[85] = "Grid reference : SU3004<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[86] = 51.155458;
toad_lon[86] = -1.0576629;
toad_2015[86] = 1;
toad_allocated[86] = 0;
toad_grid_ref[86] = "SU6640";
toad_details[86] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[87] = 50.779579;
toad_lon[87] = -2.6821859;
toad_2015[87] = 1;
toad_allocated[87] = 1;
toad_grid_ref[87] = "SY5298";
toad_details[87] = "Grid reference : SY5298<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[88] = 50.726987;
toad_lon[88] = -2.3838955;
toad_2015[88] = 1;
toad_allocated[88] = 1;
toad_grid_ref[88] = "SY7392";
toad_details[88] = "Grid reference : SY7392<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[89] = 52.012506;
toad_lon[89] = -0.47150054;
toad_2015[89] = 1;
toad_allocated[89] = 1;
toad_grid_ref[89] = "TL0536";
toad_details[89] = "Grid reference : TL0536<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[90] = 52.569311;
toad_lon[90] = -0.42270311;
toad_2015[90] = 1;
toad_allocated[90] = 1;
toad_grid_ref[90] = "TL0798";
toad_details[90] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[91] = 52.218239;
toad_lon[91] = -0.3912539;
toad_2015[91] = 1;
toad_allocated[91] = 1;
toad_grid_ref[91] = "TL1059";
toad_details[91] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[92] = 51.919603;
toad_lon[92] = -0.25653556;
toad_2015[92] = 1;
toad_allocated[92] = 1;
toad_grid_ref[92] = "TL2026";
toad_details[92] = "Grid reference : TL2026<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[93] = 51.924174;
toad_lon[93] = 0.019966472;
toad_2015[93] = 1;
toad_allocated[93] = 1;
toad_grid_ref[93] = "TL3927";
toad_details[93] = "Grid reference : TL3927<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[94] = 50.967138;
toad_lon[94] = -0.3066776;
toad_2015[94] = 1;
toad_allocated[94] = 1;
toad_grid_ref[94] = "TQ1920";
toad_details[94] = "Grid reference : TQ1920<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[95] = 51.057021;
toad_lon[95] = -0.30340095;
toad_2015[95] = 1;
toad_allocated[95] = 1;
toad_grid_ref[95] = "TQ1930";
toad_details[95] = "Grid reference : TQ1930<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[96] = 53.595421;
toad_lon[96] = -0.52073624;
toad_2015[96] = 0;
toad_allocated[96] = 1;
toad_grid_ref[96] = "SE9812";
toad_details[96] = "Grid reference : SE9812<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[97] = 53.316872;
toad_lon[97] = -1.8813774;
toad_2015[97] = 0;
toad_allocated[97] = 0;
toad_grid_ref[97] = "SK0880";
toad_details[97] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[98] = 53.163989;
toad_lon[98] = -1.8219699;
toad_2015[98] = 0;
toad_allocated[98] = 1;
toad_grid_ref[98] = "SK1263";
toad_details[98] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[99] = 53.244752;
toad_lon[99] = -1.7467089;
toad_2015[99] = 0;
toad_allocated[99] = 1;
toad_grid_ref[99] = "SK1772";
toad_details[99] = "Grid reference : SK1772<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[100] = 53.42234;
toad_lon[100] = -1.2340299;
toad_2015[100] = 0;
toad_allocated[100] = 1;
toad_grid_ref[100] = "SK5192";
toad_details[100] = "Grid reference : SK5192<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[101] = 53.304994;
toad_lon[101] = -1.1610971;
toad_2015[101] = 0;
toad_allocated[101] = 1;
toad_grid_ref[101] = "SK5679";
toad_details[101] = "Grid reference : SK5679<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[102] = 53.412407;
toad_lon[102] = -1.098807;
toad_2015[102] = 0;
toad_allocated[102] = 1;
toad_grid_ref[102] = "SK6091";
toad_details[102] = "Grid reference : SK6091<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[103] = 53.483589;
toad_lon[103] = -1.0068801;
toad_2015[103] = 0;
toad_allocated[103] = 1;
toad_grid_ref[103] = "SK6699";
toad_details[103] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[104] = 51.840874;
toad_lon[104] = -4.9772323;
toad_2015[104] = 0;
toad_allocated[104] = 1;
toad_grid_ref[104] = "SM9520";
toad_details[104] = "Grid reference : SM9520<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[105] = 51.730948;
toad_lon[105] = -4.2603315;
toad_2015[105] = 0;
toad_allocated[105] = 1;
toad_grid_ref[105] = "SN4406";
toad_details[105] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"

toad_lat[106] = 51.734937;
toad_lon[106] = -3.4350277;
toad_2015[106] = 0;
toad_allocated[106] = 1;
toad_grid_ref[106] = "SO0105";
toad_details[106] = "Grid reference : SO0105<BR>County : Rhondda Cynon Taf - Rhondda Cynon Taf<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[107] = 51.857015;
toad_lon[107] = -2.916167;
toad_2015[107] = 0;
toad_allocated[107] = 1;
toad_grid_ref[107] = "SO3718";
toad_details[107] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[108] = 51.579578;
toad_lon[108] = -4.1806409;
toad_2015[108] = 0;
toad_allocated[108] = 1;
toad_grid_ref[108] = "SS4989";
toad_details[108] = "Grid reference : SS4989<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[109] = 51.049394;
toad_lon[109] = -3.5992024;
toad_2015[109] = 0;
toad_allocated[109] = 1;
toad_grid_ref[109] = "SS8829";
toad_details[109] = "Grid reference : SS8829<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[110] = 51.464384;
toad_lon[110] = -3.4985023;
toad_2015[110] = 0;
toad_allocated[110] = 1;
toad_grid_ref[110] = "SS9675";
toad_details[110] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[111] = 51.169325;
toad_lon[111] = -3.360182;
toad_2015[111] = 0;
toad_allocated[111] = 1;
toad_grid_ref[111] = "ST0542";
toad_details[111] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[112] = 51.301708;
toad_lon[112] = -2.5751468;
toad_2015[112] = 0;
toad_allocated[112] = 1;
toad_grid_ref[112] = "ST6056";
toad_details[112] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[113] = 51.481601;
toad_lon[113] = -2.5630073;
toad_2015[113] = 0;
toad_allocated[113] = 1;
toad_grid_ref[113] = "ST6176";
toad_details[113] = "Grid reference : ST6176<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[114] = 53.480177;
toad_lon[114] = -0.012364345;
toad_2015[114] = 0;
toad_allocated[114] = 1;
toad_grid_ref[114] = "TA3200";
toad_details[114] = "Grid reference : TA3200<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[115] = 52.821893;
toad_lon[115] = -0.48777669;
toad_2015[115] = 0;
toad_allocated[115] = 1;
toad_grid_ref[115] = "TF0226";
toad_details[115] = "Grid reference : TF0226<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[116] = 53.332898;
toad_lon[116] = -0.37965746;
toad_2015[116] = 0;
toad_allocated[116] = 1;
toad_grid_ref[116] = "TF0883";
toad_details[116] = "Grid reference : TF0883<BR>County : LincolnshireBR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[117] = 52.592888;
toad_lon[117] = -0.18563893;
toad_2015[117] = 0;
toad_allocated[117] = 1;
toad_grid_ref[117] = "TF2301";
toad_details[117] = "Grid reference : TF2301<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[118] = 51.7065;
toad_lon[118] = 0.57475416;
toad_2015[118] = 0;
toad_allocated[118] = 0;
toad_grid_ref[118] = "TL7804";
toad_details[118] = "Grid reference : TL7804<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[119] = 52.172896;
toad_lon[119] = 0.63086107;
toad_2015[119] = 0;
toad_allocated[119] = 0;
toad_grid_ref[119] = "TL8056";
toad_details[119] = "Grid reference : TL8056<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[120] = 52.298627;
toad_lon[120] = 0.63830969;
toad_2015[120] = 0;
toad_allocated[120] = 0;
toad_grid_ref[120] = "TL8070";
toad_details[120] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[121] = 52.430003;
toad_lon[121] = 1.4700704;
toad_2015[121] = 0;
toad_allocated[121] = 0;
toad_grid_ref[121] = "TM3687";
toad_details[121] = "Grid reference : TM3687<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[122] = 51.55814;
toad_lon[122] = -0.14055801;
toad_2015[122] = 0;
toad_allocated[122] = 1;
toad_grid_ref[122] = "TQ2986";
toad_details[122] = "Grid reference : TQ2986<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[123] = 51.597876;
toad_lon[123] = 0.16428629;
toad_2015[123] = 0;
toad_allocated[123] = 1;
toad_grid_ref[123] = "TQ5091";
toad_details[123] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[124] = 51.594842;
toad_lon[124] = 0.32296727;
toad_2015[124] = 0;
toad_allocated[124] = 0;
toad_grid_ref[124] = "TQ6191";
toad_details[124] = "Grid reference : TQ6191<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[125] = 51.456238;
toad_lon[125] = 0.50305999;
toad_2015[125] = 0;
toad_allocated[125] = 1;
toad_grid_ref[125] = "TQ7476";
toad_details[125] = "Grid reference : TQ7476<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[126] = 52.721327;
toad_lon[126] = -2.7417053;
toad_2015[126] = 1;
toad_allocated[126] = 1;
toad_grid_ref[126] = "SJ5014";
toad_details[126] = "Grid reference : SJ5014<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[127] = 51.911176;
toad_lon[127] = -2.8881936;
toad_2015[127] = 1;
toad_allocated[127] = 1;
toad_grid_ref[127] = "SO3924";
toad_details[127] = "Grid reference : SO3924<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[128] = 52.103259;
toad_lon[128] = -2.1328118;
toad_2015[128] = 1;
toad_allocated[128] = 1;
toad_grid_ref[128] = "SO9145";
toad_details[128] = "Grid reference : SO9145<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"
toad_lat[129] = 52.525873;
toad_lon[129] = -1.9866909;
toad_2015[129] = 1;
toad_allocated[129] = 1;
toad_grid_ref[129] = "SP0192";
toad_details[129] = "Grid reference : SP0192<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"



//GCN: 

gcn_lat[0] = 54.896413;
gcn_lon[0] = -2.7499553;
gcn_2015[0] = 1;
gcn_allocated[0] = 1;
gcn_grid_ref[0] = "NY5256";
gcn_details[0] = "Grid reference : NY5256<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[1] = 54.8624003301;
gcn_lon[1] = -2.31310980661;
gcn_2015[1] = 1;
gcn_allocated[1] = 0;
gcn_grid_ref[1] = "NY8052";
gcn_details[1] = "Grid reference : NY8052<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[2] = 54.4493082984;
gcn_lon[2] = -2.15572891658;
gcn_2015[2] = 1;
gcn_allocated[2] = 0;
gcn_grid_ref[2] = "NY9006";
gcn_details[2] = "Grid reference : NY9006<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[3] = 52.218239;
gcn_lon[3] = -0.3912539;
gcn_2015[3] = 1;
gcn_allocated[3] = 0;
gcn_grid_ref[3] = "TL1059";
gcn_details[3] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[4] = 54.655874;
gcn_lon[4] = -1.7690198;
gcn_2015[4] = 1;
gcn_allocated[4] = 0;
gcn_grid_ref[4] = "NZ1529";
gcn_details[4] = "Grid reference : NZ1529<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[5] = 55.069068;
gcn_lon[5] = -1.6883529;
gcn_2015[5] = 1;
gcn_allocated[5] = 0;
gcn_grid_ref[5] = "NZ2075";
gcn_details[5] = "Grid reference : NZ2075<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[6] = 55.1496356858;
gcn_lon[6] = -1.57787647486;
gcn_2015[6] = 1;
gcn_allocated[6] = 0;
gcn_grid_ref[6] = "NZ2784";
gcn_details[6] = "Grid reference : NZ2784<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[7] = 54.511250705;
gcn_lon[7] = -1.49181126134;
gcn_2015[7] = 1;
gcn_allocated[7] = 0;
gcn_grid_ref[7] = "NZ3313";
gcn_details[7] = "Grid reference : NZ3313<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[8] = 53.81962;
gcn_lon[8] = -2.3964125;
gcn_2015[8] = 1;
gcn_allocated[8] = 0;
gcn_grid_ref[8] = "SD7436";
gcn_details[8] = "Grid reference : SD7436<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[9] = 54.195109;
gcn_lon[9] = -2.7985071;
gcn_2015[9] = 1;
gcn_allocated[9] = 0;
gcn_grid_ref[9] = "SD4878";
gcn_details[9] = "Grid reference : SD4878<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[10] = 53.584285;
gcn_lon[10] = -2.741628;
gcn_2015[10] = 1;
gcn_allocated[10] = 0;
gcn_grid_ref[10] = "SD5110";
gcn_details[10] = "Grid reference : SD5110<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[11] = 53.8551716738;
gcn_lon[11] = -2.5031806391;
gcn_2015[11] = 1;
gcn_allocated[11] = 0;
gcn_grid_ref[11] = "SD6740";
gcn_details[11] = "Grid reference : SD6740<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[12] = 53.999383;
gcn_lon[12] = -1.6048597;
gcn_2015[12] = 1;
gcn_allocated[12] = 0;
gcn_grid_ref[12] = "SE2656";
gcn_details[12] = "Grid reference : SE2656<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[13] = 52.801204;
gcn_lon[13] = -2.8913917;
gcn_2015[13] = 1;
gcn_allocated[13] = 0;
gcn_grid_ref[13] = "SJ4023";
gcn_details[13] = "Grid reference : SJ4023<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[14] = 53.8618727747;
gcn_lon[14] = -1.10436872659;
gcn_2015[14] = 1;
gcn_allocated[14] = 0;
gcn_grid_ref[14] = "SE5941";
gcn_details[14] = "Grid reference : SE5941<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[15] = 53.70661;
gcn_lon[15] = -0.81984105;
gcn_2015[15] = 1;
gcn_allocated[15] = 0;
gcn_grid_ref[15] = "SE7824";
gcn_details[15] = "Grid reference : SE7824<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[16] = 53.9507690454;
gcn_lon[16] = -0.980559483749;
gcn_2015[16] = 1;
gcn_allocated[16] = 0;
gcn_grid_ref[16] = "SE6751";
gcn_details[16] = "Grid reference : SE6751<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[17] = 53.826151;
gcn_lon[17] = -1.1355309;
gcn_2015[17] = 1;
gcn_allocated[17] = 0;
gcn_grid_ref[17] = "SE5737";
gcn_details[17] = "Grid reference : SE5737<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[18] = 53.776392;
gcn_lon[18] = -0.62060789;
gcn_2015[18] = 1;
gcn_allocated[18] = 1;
gcn_grid_ref[18] = "SE9132";
gcn_details[18] = "Grid reference : SE9132<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[19] = 53.1400492094;
gcn_lon[19] = -4.39351482049;
gcn_2015[19] = 1;
gcn_allocated[19] = 0;
gcn_grid_ref[19] = "SH4063";
gcn_details[19] = "Grid reference : SH4063<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[20] = 53.3921210935;
gcn_lon[20] = -4.37755850085;
gcn_2015[20] = 1;
gcn_allocated[20] = 0;
gcn_grid_ref[20] = "SH4291";
gcn_details[20] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[21] = 50.588947;
gcn_lon[21] = -3.7248212;
gcn_2015[21] = 1;
gcn_allocated[21] = 0;
gcn_grid_ref[21] = "SX7878";
gcn_details[21] = "Grid reference : SX7878<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[22] = 52.417948;
gcn_lon[22] = -2.1043502;
gcn_2015[22] = 1;
gcn_allocated[22] = 1;
gcn_grid_ref[22] = "SO9380";
gcn_details[22] = "Grid reference : SO9380<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[23] = 52.183371;
gcn_lon[23] = -2.4548225;
gcn_2015[23] = 1;
gcn_allocated[23] = 1;
gcn_grid_ref[23] = "SO6954";
gcn_details[23] = "Grid reference : SO6954<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[24] = 53.2388140454;
gcn_lon[24] = -3.21515485731;
gcn_2015[24] = 1;
gcn_allocated[24] = 0;
gcn_grid_ref[24] = "SJ1972";
gcn_details[24] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[25] = 53.2031673532;
gcn_lon[25] = -3.18420223255;
gcn_2015[25] = 1;
gcn_allocated[25] = 0;
gcn_grid_ref[25] = "SJ2168";
gcn_details[25] = "Grid reference : SJ2168<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[26] = 53.810945;
gcn_lon[26] = -1.7129387;
gcn_2015[26] = 1;
gcn_allocated[26] = 0;
gcn_grid_ref[26] = "SE1935";
gcn_details[26] = "Grid reference : SE1935<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[27] = 52.776800;
gcn_lon[27] = -2.4313387;
gcn_2015[27] = 1;
gcn_allocated[27] = 1;
gcn_grid_ref[27] = "SJ7120";
gcn_details[27] = "Grid reference : SJ7120<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[28] = 52.112301;
gcn_lon[28] = -2.0744280;
gcn_2015[28] = 1;
gcn_allocated[28] = 1;
gcn_grid_ref[28] = "SO9546";
gcn_details[28] = "Grid reference : SO9546<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[29] = 53.0253081917;
gcn_lon[29] = -2.97058296714;
gcn_2015[29] = 1;
gcn_allocated[29] = 0;
gcn_grid_ref[29] = "SJ3548";
gcn_details[29] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[30] = 53.4236821689;
gcn_lon[30] = -2.51312008068;
gcn_2015[30] = 1;
gcn_allocated[30] = 0;
gcn_grid_ref[30] = "SJ6692";
gcn_details[30] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[31] = 53.074207;
gcn_lon[31] = -2.0760818;
gcn_2015[31] = 1;
gcn_allocated[31] = 1;
gcn_grid_ref[31] = "SJ9553";
gcn_details[31] = "Grid reference : SJ9553<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[32] = 53.1996826179;
gcn_lon[32] = -2.30086157074;
gcn_2015[32] = 1;
gcn_allocated[32] = 0;
gcn_grid_ref[32] = "SJ8067";
gcn_details[32] = "Grid reference : SJ8067<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[33] = 53.469736;
gcn_lon[33] = -2.0014677;
gcn_2015[33] = 1;
gcn_allocated[33] = 0;
gcn_grid_ref[33] = "SK0097";
gcn_details[33] = "Grid reference : SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[34] = 53.186515;
gcn_lon[34] = -3.7973339;
gcn_2015[34] = 1;
gcn_allocated[34] = 0;
gcn_grid_ref[34] = "SH8067";
gcn_details[34] = "Grid reference : SH8067<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[35] = 52.6039814039;
gcn_lon[35] = -1.18931015913;
gcn_2015[35] = 1;
gcn_allocated[35] = 0;
gcn_grid_ref[35] = "SK5501";
gcn_details[35] = "Grid reference : SK5501<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[36] = 53.06994;
gcn_lon[36] = -3.777548;
gcn_2015[36] = 1;
gcn_allocated[36] = 0;
gcn_grid_ref[36] = "SH8154";
gcn_details[36] = "Grid reference : SH8154<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[37] = 53.290773;
gcn_lon[37] = -3.3966267;
gcn_2015[37] = 1;
gcn_allocated[37] = 0;
gcn_grid_ref[37] = "SJ0778";
gcn_details[37] = "Grid reference : SJ0778<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[38] = 52.6185582592;
gcn_lon[38] = -0.790211513714;
gcn_2015[38] = 1;
gcn_allocated[38] = 0;
gcn_grid_ref[38] = "SK8203";
gcn_details[38] = "Grid reference : SK8203<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[39] = 52.67307;
gcn_lon[39] = -3.1549924;
gcn_2015[39] = 1;
gcn_allocated[39] = 0;
gcn_grid_ref[39] = "SJ2209";
gcn_details[39] = "Grid reference : SJ2209<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[40] = 52.736128;
gcn_lon[40] = -3.141848;
gcn_2015[40] = 1;
gcn_allocated[40] = 0;
gcn_grid_ref[40] = "SJ2316";
gcn_details[40] = "Grid reference : SJ2316<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[41] = 53.059679;
gcn_lon[41] = -3.1503872;
gcn_2015[41] = 1;
gcn_allocated[41] = 0;
gcn_grid_ref[41] = "SJ2352";
gcn_details[41] = "Grid reference : SJ2352<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[42] = 52.095831;
gcn_lon[42] = -3.3297965;
gcn_2015[42] = 1;
gcn_allocated[42] = 0;
gcn_grid_ref[42] = "SO0945";
gcn_details[42] = "Grid reference : SO0945<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[43] = 52.5669006101;
gcn_lon[43] = -2.96043144929;
gcn_2015[43] = 1;
gcn_allocated[43] = 0;
gcn_grid_ref[43] = "SO3597";
gcn_details[43] = "Grid reference : SO3597<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[44] = 52.528523;
gcn_lon[44] = -3.2249012;
gcn_2015[44] = 1;
gcn_allocated[44] = 0;
gcn_grid_ref[44] = "SO1793";
gcn_details[44] = "Grid reference : SO1793<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[45] = 52.223078;
gcn_lon[45] = -3.2018367;
gcn_2015[45] = 1;
gcn_allocated[45] = 0;
gcn_grid_ref[45] = "SO1859";
gcn_details[45] = "Grid reference : SO1859<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[46] = 52.330938;
gcn_lon[46] = -3.2047588;
gcn_2015[46] = 1;
gcn_allocated[46] = 0;
gcn_grid_ref[46] = "SO1871";
gcn_details[46] = "Grid reference : SO1871<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[47] = 52.5511248603;
gcn_lon[47] = -1.36726662756;
gcn_2015[47] = 1;
gcn_allocated[47] = 0;
gcn_grid_ref[47] = "SP4395";
gcn_details[47] = "Grid reference : SP4395<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[48] = 51.7059739276;
gcn_lon[48] = -1.36465409396;
gcn_2015[48] = 1;
gcn_allocated[48] = 0;
gcn_grid_ref[48] = "SP4401";
gcn_details[48] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[49] = 51.8767961879;
gcn_lon[49] = -1.3622492636;
gcn_2015[49] = 1;
gcn_allocated[49] = 0;
gcn_grid_ref[49] = "SP4420";
gcn_details[49] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[50] = 51.9021686755;
gcn_lon[50] = -1.11479426639;
gcn_2015[50] = 1;
gcn_allocated[50] = 0;
gcn_grid_ref[50] = "SP6123";
gcn_details[50] = "Grid reference : SP6123<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[51] = 50.9428350041;
gcn_lon[51] = -4.5351391786;
gcn_2015[51] = 1;
gcn_allocated[51] = 0;
gcn_grid_ref[51] = "SS2219";
gcn_details[51] = "Grid reference : SS2219<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[52] = 52.121255;
gcn_lon[52] = -2.1182598;
gcn_2015[52] = 1;
gcn_allocated[52] = 1;
gcn_grid_ref[52] = "SO9247";
gcn_details[52] = "Grid reference : SO9247<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[53] = 52.579485;
gcn_lon[53] = -1.7210414;
gcn_2015[53] = 1;
gcn_allocated[53] = 0;
gcn_grid_ref[53] = "SP1998";
gcn_details[53] = "Grid reference : SP1998<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[54] = 50.961046;
gcn_lon[54] = -1.7023567;
gcn_2015[54] = 1;
gcn_allocated[54] = 0;
gcn_grid_ref[54] = "SU2118";
gcn_details[54] = "Grid reference : SU2118<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[55] = 50.967138;
gcn_lon[55] = -0.3066776;
gcn_2015[55] = 1;
gcn_allocated[55] = 0;
gcn_grid_ref[55] = "TQ1920";
gcn_details[55] = "Grid reference : TQ1920<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[56] = 54.107127;
gcn_lon[56] = -1.5732475;
gcn_2015[56] = 1;
gcn_allocated[56] = 0;
gcn_grid_ref[56] = "SE2868";
gcn_details[56] = "Grid reference : SE2868<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[57] = 50.9522991951;
gcn_lon[57] = -2.12952067536;
gcn_2015[57] = 1;
gcn_allocated[57] = 0;
gcn_grid_ref[57] = "ST9117";
gcn_details[57] = "Grid reference : ST9117<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[58] = 51.4559060421;
gcn_lon[58] = -2.07337052562;
gcn_2015[58] = 1;
gcn_allocated[58] = 0;
gcn_grid_ref[58] = "ST9573";
gcn_details[58] = "Grid reference : ST9573<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[59] = 51.6515283906;
gcn_lon[59] = -1.27868756591;
gcn_2015[59] = 1;
gcn_allocated[59] = 0;
gcn_grid_ref[59] = "SU5095";
gcn_details[59] = "Grid reference : SU5095<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[60] = 51.3536467328;
gcn_lon[60] = -1.11104543498;
gcn_2015[60] = 1;
gcn_allocated[60] = 0;
gcn_grid_ref[60] = "SU6262";
gcn_details[60] = "Grid reference : SU6262<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[61] = 50.5097879953;
gcn_lon[61] = -3.59505508137;
gcn_2015[61] = 1;
gcn_allocated[61] = 0;
gcn_grid_ref[61] = "SX8769";
gcn_details[61] = "Grid reference : SX8769<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[62] = 51.2940624547;
gcn_lon[62] = -1.9440350865;
gcn_2015[62] = 1;
gcn_allocated[62] = 0;
gcn_grid_ref[62] = "SU0455";
gcn_details[62] = "Grid reference : SU0455<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[63] = 54.0083437589;
gcn_lon[63] = -0.475581682379;
gcn_2015[63] = 1;
gcn_allocated[63] = 0;
gcn_grid_ref[63] = "TA0058";
gcn_details[63] = "Grid reference : TA0058<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[64] = 53.756258;
gcn_lon[64] = -1.4858088;
gcn_2015[64] = 1;
gcn_allocated[64] = 0;
gcn_grid_ref[64] = "SE3429";
gcn_details[64] = "Grid reference : SE3429<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[65] = 53.756192;
gcn_lon[65] = -1.4706427;
gcn_2015[65] = 1;
gcn_allocated[65] = 0;
gcn_grid_ref[65] = "SE3529";
gcn_details[65] = "Grid reference : SE3529<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[66] = 53.755834;
gcn_lon[66] = -1.3948132;
gcn_2015[66] = 1;
gcn_allocated[66] = 0;
gcn_grid_ref[66] = "SE4029";
gcn_details[66] = "Grid reference : SE4029<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[67] = 53.737702;
gcn_lon[67] = -1.364753;
gcn_2015[67] = 1;
gcn_allocated[67] = 0;
gcn_grid_ref[67] = "SE4227";
gcn_details[67] = "Grid reference : SE4227<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[68] = 53.764583;
gcn_lon[68] = -1.3491775;
gcn_2015[68] = 1;
gcn_allocated[68] = 0;
gcn_grid_ref[68] = "SE4330";
gcn_details[68] = "Grid reference : SE4330<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[69] = 51.7308310282;
gcn_lon[69] = -0.263788561808;
gcn_2015[69] = 1;
gcn_allocated[69] = 0;
gcn_grid_ref[69] = "TL2005";
gcn_details[69] = "Grid reference : TL2005<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[70] = 53.77357;
gcn_lon[70] = -1.3490385;
gcn_2015[70] = 1;
gcn_allocated[70] = 0;
gcn_grid_ref[70] = "SE4331";
gcn_details[70] = "Grid reference : SE4331<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[71] = 54.032026;
gcn_lon[71] = -1.0243945;
gcn_2015[71] = 1;
gcn_allocated[71] = 0;
gcn_grid_ref[71] = "SE6460";
gcn_details[71] = "Grid reference : SE6460<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[72] = 54.236462;
gcn_lon[72] = -0.77408908;
gcn_2015[72] = 1;
gcn_allocated[72] = 0;
gcn_grid_ref[72] = "SE8083";
gcn_details[72] = "Grid reference : SE8083<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[73] = 52.801204;
gcn_lon[73] = -2.8913917;
gcn_2015[73] = 1;
gcn_allocated[73] = 0;
gcn_grid_ref[73] = "SJ4023";
gcn_details[73] = "Grid reference : SJ4023<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[74] = 52.0323603418;
gcn_lon[74] = 0.870517197794;
gcn_2015[74] = 1;
gcn_allocated[74] = 0;
gcn_grid_ref[74] = "SO9145";
gcn_details[74] = "Grid reference : SO9145<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[75] = 51.271737;
gcn_lon[75] = -0.98361134;
gcn_2015[75] = 1;
gcn_allocated[75] = 0;
gcn_grid_ref[75] = "SU7153";
gcn_details[75] = "Grid reference : SU7153<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[76] = 51.4647362637;
gcn_lon[76] = -0.533046978082;
gcn_2015[76] = 1;
gcn_allocated[76] = 0;
gcn_grid_ref[76] = "TQ0275";
gcn_details[76] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[77] = 51.0948980017;
gcn_lon[77] = -0.444813321115;
gcn_2015[77] = 1;
gcn_allocated[77] = 0;
gcn_grid_ref[77] = "TQ0934";
gcn_details[77] = "Grid reference : TQ0934<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[78] = 50.902229861;
gcn_lon[78] = -0.181015502778;
gcn_2015[78] = 1;
gcn_allocated[78] = 0;
gcn_grid_ref[78] = "TQ2813";
gcn_details[78] = "Grid reference : TQ2813<BR>County : West Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[79] = 53.924782;
gcn_lon[79] = -1.1030383;
gcn_2015[79] = 1;
gcn_allocated[79] = 1;
gcn_grid_ref[79] = "SE5948";
gcn_details[79] = "Grid reference : SE5948<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[80] = 53.816102;
gcn_lon[80] = -0.99903734;
gcn_2015[80] = 1;
gcn_allocated[80] = 1;
gcn_grid_ref[80] = "SE6636";
gcn_details[80] = "Grid reference : SE6636<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[81] = 51.911176;
gcn_lon[81] = -2.8881936;
gcn_2015[81] = 1;
gcn_allocated[81] = 1;
gcn_grid_ref[81] = "SO3924";
gcn_details[81] = "Grid reference : SO3924<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[82] = 50.843079;
gcn_lon[82] = -1.4190472;
gcn_2015[82] = 1;
gcn_allocated[82] = 1;
gcn_grid_ref[82] = "SU4105";
gcn_details[82] = "Grid reference : SU4105<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[83] = 50.843007;
gcn_lon[83] = -1.404845;
gcn_2015[83] = 1;
gcn_allocated[83] = 1;
gcn_grid_ref[83] = "SU4205";
gcn_details[83] = "Grid reference : SU4205<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[84] = 51.085786;
gcn_lon[84] = -1.4017362;
gcn_2015[84] = 1;
gcn_allocated[84] = 1;
gcn_grid_ref[84] = "SU4232";
gcn_details[84] = "Grid reference : SU4232<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[85] = 53.544856;
gcn_lon[85] = -0.82434469;
gcn_2015[85] = 0;
gcn_allocated[85] = 0;
gcn_grid_ref[85] = "SE7806";
gcn_details[85] = "Grid reference : SE7806<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[86] = 53.316872;
gcn_lon[86] = -1.8813774;
gcn_2015[86] = 0;
gcn_allocated[86] = 0;
gcn_grid_ref[86] = "SK0880";
gcn_details[86] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[87] = 53.082812;
gcn_lon[87] = -1.6879435;
gcn_2015[87] = 0;
gcn_allocated[87] = 0;
gcn_grid_ref[87] = "SK2154";
gcn_details[87] = "Grid reference : SK2154<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[88] = 53.483589;
gcn_lon[88] = -1.0068801;
gcn_2015[88] = 0;
gcn_allocated[88] = 0;
gcn_grid_ref[88] = "SK6699";
gcn_details[84] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[89] = 52.890163;
gcn_lon[89] = -0.99076713;
gcn_2015[89] = 0;
gcn_allocated[89] = 0;
gcn_grid_ref[89] = "SK6833";
gcn_details[89] = "Grid reference : SK6833<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[90] = 53.209763;
gcn_lon[90] = -0.59395037;
gcn_2015[90] = 0;
gcn_allocated[90] = 0;
gcn_grid_ref[90] = "SK9469";
gcn_details[90] = "Grid reference : SK9469<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[91] = 52.975584;
gcn_lon[91] = -0.55688345;
gcn_2015[91] = 0;
gcn_allocated[91] = 0;
gcn_grid_ref[91] = "SK9743";
gcn_details[91] = "Grid reference : SK9743<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[92] = 51.730948;
gcn_lon[92] = -4.2603315;
gcn_2015[92] = 0;
gcn_allocated[92] = 0;
gcn_grid_ref[92] = "SN4406";
gcn_details[92] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[93] = 51.734937;
gcn_lon[93] = -3.4350277;
gcn_2015[93] = 0;
gcn_allocated[93] = 0;
gcn_grid_ref[93] = "SO0105";
gcn_details[93] = "Grid reference : SO0105<BR>County : Rhondda Cynon Taf - Rhondda Cynon Taf<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[94] = 51.857015;
gcn_lon[94] = -2.916167;
gcn_2015[94] = 0;
gcn_allocated[94] = 0;
gcn_grid_ref[94] = "SO3718";
gcn_details[94] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[95] = 51.769014;
gcn_lon[95] = -2.6245449;
gcn_2015[95] = 0;
gcn_allocated[95] = 0;
gcn_grid_ref[95] = "SO5708";
gcn_details[95] = "Grid reference : SO5708<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[96] = 51.833458;
gcn_lon[96] = -2.1900643;
gcn_2015[96] = 0;
gcn_allocated[96] = 0;
gcn_grid_ref[96] = "SO8715";
gcn_details[96] = "Grid reference : SO8715<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[97] = 51.579578;
gcn_lon[97] = -4.1806409;
gcn_2015[97] = 0;
gcn_allocated[97] = 0;
gcn_grid_ref[97] = "SS4989";
gcn_details[97] = "Grid reference : SS4989<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[98] = 51.464384;
gcn_lon[98] = -3.4985023;
gcn_2015[98] = 0;
gcn_allocated[98] = 0;
gcn_grid_ref[98] = "SS9675";
gcn_details[98] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[99] = 51.051259;
gcn_lon[99] = -3.4565911;
gcn_2015[99] = 0;
gcn_allocated[99] = 0;
gcn_grid_ref[99] = "SS9829";
gcn_details[99] = "Grid reference : SS9829<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[100] = 51.169325;
gcn_lon[100] = -3.360182;
gcn_2015[100] = 0;
gcn_allocated[100] = 0;
gcn_grid_ref[100] = "ST0542";
gcn_details[100] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[101] = 50.931314;
gcn_lon[101] = -2.8551645;
gcn_2015[101] = 0;
gcn_allocated[101] = 0;
gcn_grid_ref[101] = "ST4015";
gcn_details[101] = "Grid reference : ST4015<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[102] = 50.976476;
gcn_lon[102] = -2.8275062;
gcn_2015[102] = 0;
gcn_allocated[102] = 0;
gcn_grid_ref[102] = "ST4220";
gcn_details[102] = "Grid reference : ST4220<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[103] = 51.301708;
gcn_lon[103] = -2.5751468;
gcn_2015[103] = 0;
gcn_allocated[103] = 0
gcn_grid_ref[103] = "ST6056";
gcn_details[103] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[104] = 52.595469;
gcn_lon[104] = -0.36270666;
gcn_2015[104] = 0;
gcn_allocated[104] = 0;
gcn_grid_ref[104] = "TF1101";
gcn_details[104] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[105] = 52.992779;
gcn_lon[105] = 0.099284333;
gcn_2015[105] = 0;
gcn_allocated[105] = 0;
gcn_grid_ref[105] = "TF4146";
gcn_details[105] = "Grid reference : TF4146<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[106] = 53.29629;
gcn_lon[106] = 0.21918516;
gcn_2015[106] = 0;
gcn_allocated[106] = 0;
gcn_grid_ref[106] = "TF4880";
gcn_details[106] = "Grid reference : TF4880<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[107] = 52.830349;
gcn_lon[107] = 1.3088804;
gcn_2015[107] = 0;
gcn_allocated[107] = 0;
gcn_grid_ref[107] = "TG2331";
gcn_details[107] = "Grid reference : TG2331<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[108] = 51.708771;
gcn_lon[108] = -0.004118918;
gcn_2015[108] = 0;
gcn_allocated[108] = 0;
gcn_grid_ref[108] = "TL3803";
gcn_details[108] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[109] = 52.013267;
gcn_lon[109] = 0.067695002;
gcn_2015[109] = 0;
gcn_allocated[109] = 0;
gcn_grid_ref[109] = "TL4237";
gcn_details[109] = "Grid reference : TL4237<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[110] = 51.889086;
gcn_lon[110] = 0.84679403;
gcn_2015[110] = 0;
gcn_allocated[110] = 0;
gcn_grid_ref[110] = "TL9625";
gcn_details[110] = "Grid reference : TL9625<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[111] = 52.113574;
gcn_lon[111] = 0.86108087;
gcn_2015[111] = 0;
gcn_allocated[111] = 0;
gcn_grid_ref[111] = "TL9650";
gcn_details[111] = "Grid reference : TL9650<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[112] = 52.032406;
gcn_lon[112] = 0.87047456;
gcn_2015[112] = 0;
gcn_allocated[112] = 0;
gcn_grid_ref[112] = "TL9741";
gcn_details[112] = "Grid reference : TL9741<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[113] = 52.03074;
gcn_lon[113] = 1.278641;
gcn_2015[113] = 0;
gcn_allocated[113] = 0;
gcn_grid_ref[113] = "TM2542";
gcn_details[113] = "Grid reference : TM2542<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[114] = 52.522721;
gcn_lon[114] = 1.3741636;
gcn_2015[114] = 0;
gcn_allocated[114] = 0;
gcn_grid_ref[114] = "TM2997";
gcn_details[114] = "Grid reference : TM2997<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[115] = 51.597876;
gcn_lon[115] = 0.16428629;
gcn_2015[115] = 0;
gcn_allocated[115] = 0;
gcn_grid_ref[115] = "TQ5091";
gcn_details[115] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[116] = 51.13775;
gcn_lon[116] = 0.24276399;
gcn_2015[116] = 0;
gcn_allocated[116] = 0;
gcn_grid_ref[116] = "TQ5740";
gcn_details[116] = "Grid reference : TQ5740<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[117] = 51.594842;
gcn_lon[117] = 0.32296727;
gcn_2015[117] = 0;
gcn_allocated[117] = 0;
gcn_grid_ref[117] = "TQ6191";
gcn_details[117] = "Grid reference : TQ6191<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"

gcn_lat[118] = 51.463663;
gcn_lon[118] = 0.5754557;
gcn_2015[118] = 0;
gcn_allocated[118] = 0;
gcn_grid_ref[118] = "TQ7977";
gcn_details[118] = "Grid reference : TQ7977<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[119] = 51.561831;
gcn_lon[119] = 0.60985844;
gcn_2015[119] = 0;
gcn_allocated[119] = 0;
gcn_grid_ref[119] = "TQ8188";
gcn_details[119] = "Grid reference : TQ8188<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[120] = 51.300375;
gcn_lon[120] = 1.0110682;
gcn_2015[120] = 0;
gcn_allocated[120] = 0;
gcn_grid_ref[120] = "TR1060";
gcn_details[120] = "Grid reference : TR1060<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[121] = 54.916381;
gcn_lon[121] = -1.7207325;
gcn_2015[121] = 1;
gcn_allocated[121] = 0;
gcn_grid_ref[121] = "NZ1858";
gcn_details[121] = "Grid reference : NZ1858<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"
gcn_lat[122] = 52.662587;
gcn_lon[122] = -0.70029281;
gcn_2015[122] = 1;
gcn_allocated[122] = 0;
gcn_grid_ref[122] = "SK8808";
gcn_details[122] = "Grid reference : SK8808<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/GCN_method_overview.pdf'>View survey methodology</a><br>"


//eDNA:
edna_lat[0] = 54.6437774348;
edna_lon[0] = -2.9002706725;
edna_2015[0] = 1;
edna_allocated[0] = 0;
edna_thames[0] = 0
edna_grid_ref[0] = "NY4228";
edna_details[0] = "Grid reference : NY4228<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[1] = 54.570354;
edna_lon[1] = -3.0842522;
edna_2015[1] = 1;
edna_allocated[1] = 0;
edna_thames[1] = 0
edna_grid_ref[1] = "NY3020";
edna_details[1] = "Grid reference : NY3020<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[2] = 54.617354;
edna_lon[2] = -2.8222412;
edna_2015[2] = 1;
edna_allocated[2] = 0;
edna_thames[2] = 0
edna_grid_ref[2] = "NY4725";
edna_details[2] = "Grid reference : NY4725<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[3] = 54.4041143375;
edna_lon[3] = -2.29420380625;
edna_2015[3] = 1;
edna_allocated[3] = 0;
edna_thames[3] = 0
edna_grid_ref[3] = "NY8101";
edna_details[3] = "Grid reference : NY8101<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[4] = 54.581617;
edna_lon[4] = -2.7905769;
edna_2015[4] = 1;
edna_allocated[4] = 0;
edna_thames[4] = 0
edna_grid_ref[4] = "NY4921";
edna_details[4] = "Grid reference : NY4921<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[5] = 55.2402261829;
edna_lon[5] = -1.98581151469;
edna_2015[5] = 1;
edna_allocated[5] = 0;
edna_thames[5] = 0
edna_grid_ref[5] = "NZ0194";
edna_details[5] = "Grid reference : NZ0194<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[6] = 54.9705431189;
edna_lon[6] = -1.84531672967;
edna_2015[6] = 1;
edna_allocated[6] = 0;
edna_thames[6] = 0
edna_grid_ref[6] = "NZ1064";
edna_details[6] = "Grid reference : NZ1064<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[7] = 54.916529442;
edna_lon[7] = -1.78312312644;
edna_2015[7] = 1;
edna_allocated[7] = 0;
edna_thames[7] = 0
edna_grid_ref[7] = "NZ1458";
edna_details[7] = "Grid reference : NZ1458<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[8] = 54.952318;
edna_lon[8] = -2.2825780;
edna_2015[8] = 1;
edna_allocated[8] = 0;
edna_thames[8] = 0
edna_grid_ref[8] = "NY8262";
edna_details[8] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[9] = 54.5113765651;
edna_lon[9] = -1.52270090647;
edna_2015[9] = 1;
edna_allocated[9] = 0;
edna_thames[9] = 0
edna_grid_ref[9] = "NZ3113";
edna_details[9] = "Grid reference : NZ3113<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[10] = 54.6095992921;
edna_lon[10] = -1.38220705917;
edna_2015[10] = 1;
edna_allocated[10] = 0;
edna_thames[10] = 0
edna_grid_ref[10] = "NZ4024";
edna_details[10] = "Grid reference : NZ4024<BR>County : Cleveland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[11] = 54.491363;
edna_lon[11] = -1.1524352;
edna_2015[11] = 1;
edna_allocated[11] = 0;
edna_thames[11] = 0
edna_grid_ref[11] = "NZ5511";
edna_details[11] = "Grid reference : NZ5511 <BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[12] = 53.5636489346;
edna_lon[12] = -3.08855565622;
edna_2015[12] = 1;
edna_allocated[12] = 0;
edna_thames[12] = 0
edna_grid_ref[12] = "SD2808";
edna_details[12] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[13] = 53.7624022374;
edna_lon[13] = -2.9723298506;
edna_2015[13] = 1;
edna_allocated[13] = 0;
edna_thames[13] = 0
edna_grid_ref[13] = "SD3630";
edna_details[13] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[14] = 55.141288;
edna_lon[14] = -2.1270385;
edna_2015[14] = 1;
edna_allocated[14] = 0;
edna_thames[14] = 0
edna_grid_ref[14] = "NY9283";
edna_details[14] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[15] = 55.024417;
edna_lon[15] = -1.8294750;
edna_2015[15] = 1;
edna_allocated[15] = 0;
edna_thames[15] = 0
edna_grid_ref[15] = "NZ1170";
edna_details[15] = "Grid reference : NZ1170<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[16] = 55.176621;
edna_lon[16] = -1.5933067;
edna_2015[16] = 1;
edna_allocated[16] = 0;
edna_thames[16] = 0
edna_grid_ref[16] = "NZ2687";
edna_details[16] = "Grid reference : NZ2687<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[17] = 54.354977;
edna_lon[17] = -3.0477974;
edna_2015[17] = 1;
edna_allocated[17] = 0;
edna_thames[17] = 0
edna_grid_ref[17] = "SD3296";
edna_details[17] = "Grid reference : SD3296<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[18] = 54.374071;
edna_lon[18] = -2.9097355;
edna_2015[18] = 1;
edna_allocated[18] = 0;
edna_thames[18] = 0
edna_grid_ref[18] = "SD4198";
edna_details[18] = "Grid reference : SD4198<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[19] = 54.089552;
edna_lon[19] = -2.2919661;
edna_2015[19] = 1;
edna_allocated[19] = 0;
edna_thames[19] = 0
edna_grid_ref[19] = "SD8166";
edna_details[19] = "Grid reference : SD8166<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[20] = 53.8558058247;
edna_lon[20] = -1.68222323753;
edna_2015[20] = 1;
edna_allocated[20] = 0;
edna_thames[20] = 0
edna_grid_ref[20] = "zE2140";
edna_details[20] = "Grid reference : SE2140<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[21] = 53.5321912834;
edna_lon[21] = -1.66956411567;
edna_2015[21] = 1;
edna_allocated[21] = 0;
edna_thames[21] = 0
edna_grid_ref[21] = "SE2204";
edna_details[21] = "Grid reference : SE2204<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[22] = 54.1071301395;
edna_lon[22] = -1.5732403619;
edna_2015[22] = 1;
edna_allocated[22] = 0;
edna_thames[22] = 0
edna_grid_ref[22] = "SE2868";
edna_details[22] = "Grid reference : SE2868<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[23] = 54.2364659672;
edna_lon[23] = -0.77406438985;
edna_2015[23] = 1;
edna_allocated[23] = 0;
edna_thames[23] = 0
edna_grid_ref[23] = "SE8083";
edna_details[23] = "Grid reference : SE8083<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[24] = 53.3656577161;
edna_lon[24] = -3.11355946081;
edna_2015[24] = 1;
edna_allocated[24] = 0;
edna_thames[24] = 0
edna_grid_ref[24] = "SJ2686";
edna_details[24] = "Grid reference : SJ2686<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[25] = 53.1894075445;
edna_lon[25] = -2.630050836;
edna_2015[25] = 1;
edna_allocated[25] = 0;
edna_thames[25] = 0
edna_grid_ref[25] = "SJ3877";
edna_details[25] = "Grid reference : SJ3877<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[26] = 53.404714;
edna_lon[26] = -2.7084167;
edna_2015[26] = 1;
edna_allocated[26] = 0;
edna_thames[26] = 0
edna_grid_ref[26] = "SJ5390";
edna_details[26] = "Grid reference : SJ5390<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[27] = 52.686738;
edna_lon[27] = -2.4748312;
edna_2015[27] = 1;
edna_allocated[27] = 1;
edna_thames[27] = 0
edna_grid_ref[27] = "SJ6810";
edna_details[27] = "Grid reference : SJ6810<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[28] = 51.149889;
edna_lon[28] = 0.52934289;
edna_2015[28] = 1;
edna_allocated[28] = 0;
edna_thames[28] = 0
edna_grid_ref[28] = "TQ7742";
edna_details[28] = "Grid reference : TQ7742<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[29] = 53.060803;
edna_lon[29] = - 0.97186244;
edna_2015[29] = 1;
edna_allocated[29] = 0;
edna_thames[29] = 0
edna_grid_ref[29] = "SK6952";
edna_details[29] = "Grid reference : SK6952<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[30] = 52.619598;
edna_lon[30] = -0.89359904;
edna_2015[30] = 1;
edna_allocated[30] = 0;
edna_thames[30] = 0
edna_grid_ref[30] = "SK7503";
edna_details[30] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[31] = 52.662587;
edna_lon[31] = -0.70029281;
edna_2015[31] = 1;
edna_allocated[31] = 0;
edna_thames[31] = 0
edna_grid_ref[31] = "SK8808";
edna_details[31] = "Grid reference : SK8808<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[32] = 53.200759069;
edna_lon[32] = -0.594223128246;
edna_2015[32] = 1;
edna_allocated[32] = 0;
edna_thames[32] = 0
edna_grid_ref[32] = "SK9468";
edna_details[32] = "Grid reference : SK9468<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[33] = 52.650658;
edna_lon[33] = -2.5040031;
edna_2015[33] = 1;
edna_allocated[33] = 1;
edna_thames[33] = 0
edna_grid_ref[33] = "SJ6606";
edna_details[33] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[34] = 53.189517;
edna_lon[34] = -1.3878471;
edna_2015[34] = 1;
edna_allocated[34] = 0;
edna_thames[34] = 0
edna_grid_ref[34] = "SK4166";
edna_details[34] = "Grid reference : SK4166<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[35] = 52.498828;
edna_lon[35] = -2.1340029;
edna_2015[35] = 1;
edna_allocated[35] = 1;
edna_thames[35] = 0
edna_grid_ref[35] = "SO9189";
edna_details[35] = "Grid reference : SO9189<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[36] = 52.498895;
edna_lon[36] = -2.0456206;
edna_2015[36] = 1;
edna_allocated[36] = 0;
edna_thames[36] = 0
edna_grid_ref[36] = "SO9789";
edna_details[36] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[37] = 52.193196;
edna_lon[37] = -1.8990136;
edna_2015[37] = 1;
edna_allocated[37] = 0;
edna_thames[37] = 0
edna_grid_ref[37] = "SP0755";
edna_details[37] = "Grid reference : SP0755<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[38] = 52.3348711045;
edna_lon[38] = -1.28229881236;
edna_2015[38] = 1;
edna_allocated[38] = 0;
edna_thames[38] = 1
edna_grid_ref[38] = "SP4971";
edna_details[38] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[39] = 52.074543;
edna_lon[39] = -1.3448443;
edna_2015[39] = 1;
edna_allocated[39] = 0;
edna_thames[39] = 0
edna_grid_ref[39] = "SP4542";
edna_details[39] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[40] = 51.704751;
edna_lon[40] = -1.1620694;
edna_2015[40] = 1;
edna_allocated[40] = 0;
edna_thames[40] = 0
edna_grid_ref[40] = "SP5801";
edna_details[40] = "Grid reference : SP5801<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[41] = 51.837846;
edna_lon[41] = -0.94188896;
edna_2015[41] = 1;
edna_allocated[41] = 0;
edna_thames[41] = 0
edna_grid_ref[41] = "SP7316";
edna_details[41] = "Grid reference : SP7316<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[42] = 51.816901;
edna_lon[42] = -0.65222472;
edna_2015[42] = 1;
edna_allocated[42] = 0;
edna_thames[42] = 0
edna_grid_ref[42] = "SP9314";
edna_details[42] = "Grid reference : SP9314<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[43] = 50.9277869015;
edna_lon[43] = -3.90814819152;
edna_2015[43] = 1;
edna_allocated[43] = 0;
edna_thames[43] = 0
edna_grid_ref[43] = "SS6616";
edna_details[43] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[44] = 52.275629;
edna_lon[44] = - -0.66766913;
edna_2015[44] = 1;
edna_allocated[44] = 1;
edna_thames[44] = 0
edna_grid_ref[44] = "SP9165";
edna_details[44] = "Grid reference : SP9165<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[45] = 53.368007;
edna_lon[45] = -0.31820437;
edna_2015[45] = 1;
edna_allocated[45] = 0;
edna_thames[45] = 0
edna_grid_ref[45] = "TF1287";
edna_details[45] = "Grid reference : TF1287<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[46] = 51.014761;
edna_lon[46] = -3.4982159;
edna_2015[46] = 1;
edna_allocated[46] = 0;
edna_thames[46] = 0
edna_grid_ref[46] = "SS9525";
edna_details[46] = "Grid reference : SS9525<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[47] = 51.481601;
edna_lon[47] = -2.5630073;
edna_2015[47] = 1;
edna_allocated[47] = 0;
edna_thames[47] = 0
edna_grid_ref[47] = "ST6176";
edna_details[47] = "Grid reference : ST6176<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[48] = 51.284492;
edna_lon[48] = -2.3885280;
edna_2015[48] = 1;
edna_allocated[48] = 0;
edna_thames[48] = 0
edna_grid_ref[48] = "ST7354";
edna_details[48] = "Grid reference : ST7354<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[49] = 50.9607812033;
edna_lon[49] = -1.63117650697;
edna_2015[49] = 1;
edna_allocated[49] = 0;
edna_thames[49] = 0
edna_grid_ref[49] = "SU2618";
edna_details[49] = "Grid reference : SU2618<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[50] = 50.8346948064;
edna_lon[50] = -1.57536821637;
edna_2015[50] = 1;
edna_allocated[50] = 0;
edna_thames[50] = 0
edna_grid_ref[50] = "SU3004";
edna_details[50] = "Grid reference : SU3004<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[51] = 51.1553990917;
edna_lon[51] = -1.05766340784;
edna_2015[51] = 1;
edna_allocated[51] = 0;
edna_thames[51] = 0
edna_grid_ref[51] = "SU6640";
edna_details[51] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[52] = 52.718097;
edna_lon[52] = 1.1374570;
edna_2015[52] = 1;
edna_allocated[52] = 1;
edna_thames[52] = 0
edna_grid_ref[52] = "TG1218";
edna_details[52] = "Grid reference : TG1218<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[53] = 51.314565825;
edna_lon[53] = -0.767428778795;
edna_2015[53] = 1;
edna_allocated[53] = 0;
edna_thames[53] = 0
edna_grid_ref[53] = "SU8658";
edna_details[53] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[54] = 51.0341236223;
edna_lon[54] = -0.617998869207;
edna_2015[54] = 1;
edna_allocated[54] = 0;
edna_thames[54] = 0
edna_grid_ref[54] = "SU9727";
edna_details[54] = "Grid reference : SU9727<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[55] = 50.455655881;
edna_lon[55] = -3.60732155606;
edna_2015[55] = 1;
edna_allocated[55] = 0;
edna_thames[55] = 0
edna_grid_ref[55] = "SX8663";
edna_details[55] = "Grid reference : SX8663<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[56] = 50.580982;
edna_lon[56] = -3.6539045;
edna_2015[56] = 1;
edna_allocated[56] = 0;
edna_thames[56] = 0
edna_grid_ref[56] = "SX8377";
edna_details[56] = "Grid reference : SX8377<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[57] = 51.644795;
edna_lon[57] = -1.9724933;
edna_2015[57] = 1;
edna_allocated[57] = 0;
edna_thames[57] = 0
edna_grid_ref[57] = "SU0294";
edna_details[57] = "Grid reference : SU0294<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[58] = 51.413807;
edna_lon[58] = -0.79352925;
edna_2015[58] = 1;
edna_allocated[58] = 0;
edna_thames[58] = 0
edna_grid_ref[58] = "SU8469";
edna_details[58] = "Grid reference : SU8469<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[59] = 54.3677174898;
edna_lon[59] = -0.462299842079;
edna_2015[59] = 1;
edna_allocated[59] = 0;
edna_thames[59] = 0
edna_grid_ref[59] = "TA0098";
edna_details[59] = "Grid reference : TA0098<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[60] = 54.2054089071;
edna_lon[60] = -0.4223360298;
edna_2015[60] = 1;
edna_allocated[60] = 0;
edna_thames[60] = 0
edna_grid_ref[60] = "TA0380";
edna_details[60] = "Grid reference : TA0380<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[61] = 54.139066;
edna_lon[61] = -0.17995673;
edna_2015[61] = 1;
edna_allocated[61] = 0;
edna_thames[61] = 0
edna_grid_ref[61] = "TA1973";
edna_details[61] = "Grid reference : TA1973<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[62] = 50.836244;
edna_lon[62] = -0.60965864;
edna_2015[62] = 1;
edna_allocated[62] = 0;
edna_thames[62] = 0
edna_grid_ref[62] = "SU9805";
edna_details[62] = "Grid reference : SU9805<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[63] = 50.779579;
edna_lon[63] = -2.6821859;
edna_2015[63] = 1;
edna_allocated[63] = 0;
edna_thames[63] = 0
edna_grid_ref[63] = "SY5298";
edna_details[63] = "Grid reference : SY5298<BR>County : Dorest<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[64] = 53.1081938474;
edna_lon[64] = 0.179642753153;
edna_2015[64] = 1;
edna_allocated[64] = 0;
edna_thames[64] = 0
edna_grid_ref[64] = "TF4659";
edna_details[64] = "Grid reference : TF4659<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[65] = 53.761770;
edna_lon[65] = -0.19631373;
edna_2015[65] = 1;
edna_allocated[65] = 0;
edna_thames[65] = 0
edna_grid_ref[65] = "TA1931";
edna_details[65] = "Grid reference : TA1931<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[66] = 53.333101;
edna_lon[66] = -0.39466768;
edna_2015[66] = 1;
edna_allocated[66] = 0;
edna_thames[66] = 0
edna_grid_ref[66] = "TF0783";
edna_details[66] = "Grid reference : TF0783<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[67] = 52.5515021065;
edna_lon[67] = -0.438069881667;
edna_2015[67] = 1;
edna_allocated[67] = 1;
edna_thames[67] = 0
edna_grid_ref[67] = "TL0696";
edna_details[67] = "Grid reference : TL0696<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[68] = 52.4115277069;
edna_lon[68] = -0.0901408642007;
edna_2015[68] = 1;
edna_allocated[68] = 1;
edna_thames[68] = 0
edna_grid_ref[68] = "TL3081";
edna_details[68] = "Grid reference : TL3081<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[69] = 52.1864168759;
edna_lon[69] = -0.0705452651306;
edna_2015[69] = 1;
edna_allocated[69] = 1;
edna_thames[68] = 0
edna_grid_ref[69] = "TL3256";
edna_details[69] = "Grid reference : TL3256<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[70] = 53.332898;
edna_lon[70] = -0.37965746;
edna_2015[70] = 1;
edna_allocated[70] = 0;
edna_thames[70] = 0
edna_grid_ref[70] = "TF0883";
edna_details[70] = "Grid reference : TF0883<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[71] = 52.760481;
edna_lon[71] = 0.48827903;
edna_2015[71] = 1;
edna_allocated[71] = 1;
edna_thames[71] = 0
edna_grid_ref[71] = "TF6821";
edna_details[71] = "Grid reference : TF6821<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[72] = 54.749627;
edna_lon[72] = -3.1356478;
edna_2015[72] = 1;
edna_allocated[72] = 0;
edna_thames[72] = 0
edna_grid_ref[72] = "NY2740";
edna_details[72] = "Grid reference : NY2740<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[73] = 52.498636;
edna_lon[73] = -2.2518450;
edna_2015[73] = 1;
edna_allocated[73] = 1;
edna_thames[73] = 0
edna_grid_ref[73] = "SO4666";
edna_details[73] = "Grid reference : SO4666<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[74] = 52.148241;
edna_lon[74] = -2.1037170;
edna_2015[74] = 1;
edna_allocated[74] = 1;
edna_thames[74] = 0
edna_grid_ref[74] = "SO9350";
edna_details[74] = "Grid reference : SO9350<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[75] = 50.726987;
edna_lon[75] = -2.3838955;
edna_2015[75] = 1;
edna_allocated[75] = 0;
edna_thames[75] = 0
edna_grid_ref[75] = "SY7392";
edna_details[75] = "Grid reference : SY7392<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[76] = 52.14785253;
edna_lon[76] = 1.57972082998;
edna_2015[76] = 1;
edna_allocated[76] = 1;
edna_thames[76] = 0
edna_grid_ref[76] = "TM4556";
edna_details[76] = "Grid reference : TM4556<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[77] = 52.751420;
edna_lon[77] = 0.88789698;
edna_2015[77] = 1;
edna_allocated[77] = 1;
edna_thames[77] = 0
edna_grid_ref[77] = "TF9521";
edna_details[77] = "Grid reference : TF9521<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[78] = 50.8388677028;
edna_lon[78] = -0.1550738877;
edna_2015[78] = 1;
edna_allocated[78] = 0;
edna_thames[78] = 0
edna_grid_ref[78] = "TQ3006";
edna_details[78] = "Grid reference : TQ3006<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[79] = 50.9516280875;
edna_lon[79] = 0.0914340943444;
edna_2015[79] = 1;
edna_allocated[79] = 0;
edna_thames[79] = 0
edna_grid_ref[79] = "TQ4719";
edna_details[79] = "Grid reference : TQ4719<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[80] = 51.404148;
edna_lon[80] = 0.41394017;
edna_2015[80] = 1;
edna_allocated[80] = 0;
edna_thames[80] = 0
edna_grid_ref[80] = "TQ6870";
edna_details[80] = "Grid reference : TQ6870<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[81] = 52.002604;
edna_lon[81] = -2.6569265;
edna_2015[81] = 1;
edna_allocated[81] = 1;
edna_thames[81] = 0
edna_grid_ref[81] = "SO5534";
edna_details[81] = "Grid reference : SO5534<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[82] = 52.005656;
edna_lon[82] = -0.64656247;
edna_2015[82] = 1;
edna_allocated[82] = 0;
edna_thames[82] = 0
edna_grid_ref[82] = "SP9335";
edna_details[82] = "Grid reference : SP9335<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[83] = 52.6850621807;
edna_lon[83] = -2.78549704035;
edna_2015[83] = 1;
edna_allocated[83] = 1;
edna_thames[83] = 0
edna_grid_ref[83] = "SJ4710";
edna_details[83] = "Grid reference : SJ4710<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[84] = 52.022373;
edna_lon[84] = -2.1034249;
edna_2015[84] = 0;
edna_allocated[84] = 1;
edna_thames[84] = 0
edna_grid_ref[84] = "SO9336";
edna_details[84] = "Grid reference : SO9336<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[85] = 51.068317895;
edna_lon[85] = -2.47237408628;
edna_2015[85] = 0;
edna_allocated[85] = 0;
edna_thames[85] = 0
edna_grid_ref[85] = "ST6730";
edna_details[85] = "Grid reference : ST6730<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[86] = 50.9609082742;
edna_lon[86] = -1.67389296787;
edna_2015[86] = 1;
edna_allocated[86] = 0;
edna_thames[86] = 0
edna_grid_ref[86] = "SU2318";
edna_details[86] = "Grid reference : SU2318<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[87] = 51.402033;
edna_lon[87] = 0.51447684;
edna_2015[87] = 1;
edna_allocated[87] = 0;
edna_thames[87] = 0
edna_grid_ref[87] = "TQ7570";
edna_details[87] = "Grid reference : TQ7570<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[88] = 52.569311;
edna_lon[88] = -0.42270311;
edna_2015[88] = 1;
edna_allocated[88] = 1;
edna_thames[88] = 0
edna_grid_ref[88] = "TL0798";
edna_details[88] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[89] = 52.296979;
edna_lon[89] = 0.28620994;
edna_2015[89] = 1;
edna_allocated[89] = 1;
edna_thames[89] = 0
edna_grid_ref[89] = "TL5669";
edna_details[89] = "Grid reference : TL5669<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[90] = 53.163989;
edna_lon[90] = -1.8219699;
edna_2015[90] = 1;
edna_allocated[90] = 0;
edna_thames[90] = 0
edna_grid_ref[90] = "SK1263";
edna_details[90] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[91] = 52.507625;
edna_lon[91] = -2.2518965;
edna_2015[91] = 1;
edna_allocated[91] = 1;
edna_thames[91] = 0
edna_grid_ref[91] = "SO8390";
edna_details[91] = "Grid reference : SO8390<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[92] = 51.063313;
edna_lon[92] = -3.1858206;
edna_2015[92] = 1;
edna_allocated[92] = 0;
edna_thames[92] = 0
edna_grid_ref[92] = "ST1730";
edna_details[92] = "Grid reference : ST1730<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[93] = 50.69867;
edna_lon[93] = -1.3217163;
edna_2015[93] = 1;
edna_allocated[93] = 0;
edna_thames[93] = 0
edna_grid_ref[93] = "SZ4889";
edna_details[93] = "Grid reference : SZ4889<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[94] = 52.298627;
edna_lon[94] = 0.63830969;
edna_2015[94] = 1;
edna_allocated[94] = 1;
edna_thames[94] = 0
edna_grid_ref[94] = "TL8070";
edna_details[94] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[95] = 51.894154;
edna_lon[95] = 0.62907753;
edna_2015[95] = 1;
edna_allocated[95] = 1;
edna_thames[95] = 0
edna_grid_ref[95] = "TL8125";
edna_details[95] = "Grid reference : TL8125<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[96] = 51.85477;
edna_lon[96] = 1.1351034;
edna_2015[96] = 1;
edna_allocated[96] = 1;
edna_thames[96] = 0
edna_grid_ref[96] = "TM1622";
edna_details[96] = "Grid reference : TM1622<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[97] = 51.057021;
edna_lon[97] = -0.30340095;
edna_2015[97] = 1;
edna_allocated[97] = 0;
edna_thames[97] = 0
edna_grid_ref[97] = "TQ1930";
edna_details[97] = "Grid reference : TQ1930<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[98] = 51.424671;
edna_lon[98] = -0.23228506;
edna_2015[98] = 1;
edna_allocated[98] = 0;
edna_thames[98] = 0
edna_grid_ref[98] = "TQ2371";
edna_details[98] = "Grid reference : TQ2371<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[99] = 51.546374;
edna_lon[99] = 0.49358131;
edna_2015[99] = 1;
edna_allocated[99] = 1;
edna_thames[99] = 0
edna_grid_ref[99] = "TQ7386";
edna_details[99] = "Grid reference : TQ7386<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[100] = 51.824395;
edna_lon[100] = -1.7692535;
edna_2015[100] = 0;
edna_allocated[100] = 1;
edna_thames[100] = 1
edna_grid_ref[100] = "SP1614";
edna_details[100] = "Grid reference : SP1614<BR>County : Gloucester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[101] = 51.706021;
edna_lon[101] = -1.3646508;
edna_2015[101] = 0;
edna_allocated[101] = 0;
edna_thames[101] = 1
edna_grid_ref[101] = "SP4401";
edna_details[101] = "Grid reference : SP4401<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[102] = 51.876839;
edna_lon[102] = -1.362247;
edna_2015[102] = 0;
edna_allocated[102] = 0;
edna_thames[102] = 1
edna_grid_ref[102] = "SP4420";
edna_details[102] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[103] = 52.074543;
edna_lon[103] = -1.3448443;
edna_2015[103] = 0;
edna_allocated[103] = 0;
edna_thames[103] = 1
edna_grid_ref[103] = "SP4542";
edna_details[103] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[104] = 52.040354;
edna_lon[104] = -2.1034665;
edna_2015[104] = 1;
edna_allocated[104] = 1;
edna_thames[104] = 0
edna_grid_ref[104] = "SO9338";
edna_details[104] = "Grid reference : SO9338<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[105] = 52.343894;
edna_lon[105] = -1.2821553;
edna_2015[105] = 0;
edna_allocated[105] = 0;
edna_thames[105] = 1
edna_grid_ref[105] = "SP4972";
edna_details[105] = "Grid reference : SP4972<BR>County : Warwichshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[106] = 51.704751;
edna_lon[106] = -1.1620694;
edna_2015[106] = 0;
edna_allocated[106] = 0;
edna_thames[106] = 1
edna_grid_ref[106] = "SP5801";
edna_details[106] = "Grid reference : SP5801<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[107] = 51.902212;
edna_lon[107] = -1.114797;
edna_2015[107] = 0;
edna_allocated[107] = 0;
edna_thames[107] = 1
edna_grid_ref[107] = "SP6123";
edna_details[107] = "Grid reference : SP6123<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[108] = 51.865685;
edna_lon[108] = -1.0428984;
edna_2015[108] = 0;
edna_allocated[108] = 0;
edna_thames[108] = 1
edna_grid_ref[108] = "SP6619";
edna_details[108] = "Grid reference : SP6619<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[109] = 51.837846;
edna_lon[109] = -0.94188896;
edna_2015[109] = 0;
edna_allocated[109] = 0;
edna_thames[109] = 1
edna_grid_ref[109] = "SP7316";
edna_details[109] = "Grid reference : SP7316<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[110] = 51.446987;
edna_lon[110] = -1.9870007;
edna_2015[110] = 0;
edna_allocated[110] = 0;
edna_thames[110] = 1
edna_grid_ref[110] = "SU0172";
edna_details[110] = "Grid reference : SU0172<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[111] = 51.644795;
edna_lon[111] = -1.9724933;
edna_2015[111] = 0;
edna_allocated[111] = 0;
edna_thames[111] = 1
edna_grid_ref[111] = "SU0294";
edna_details[111] = "Grid reference : SU0294<BR>County : Gloucester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[112] = 51.43785;
edna_lon[112] = -1.814364;
edna_2015[112] = 0;
edna_allocated[112] = 0;
edna_thames[112] = 1
edna_grid_ref[112] = "SU1371";
edna_details[112] = "Grid reference : SU1371<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[113] = 51.427227;
edna_lon[113] = -1.3541397;
edna_2015[113] = 0;
edna_allocated[113] = 0;
edna_thames[113] = 1
edna_grid_ref[113] = "SU4570";
edna_details[113] = "Grid reference : SU4570<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[114] = 51.68796;
edna_lon[114] = -1.3504376;
edna_2015[114] = 0;
edna_allocated[114] = 0;
edna_thames[114] = 1
edna_grid_ref[114] = "SU4599";
edna_details[114] = "Grid reference : SU4599<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[115] = 51.68788;
edna_lon[115] = -1.3359728;
edna_2015[115] = 0;
edna_allocated[115] = 0;
edna_thames[115] = 1
edna_grid_ref[115] = "SU4699";
edna_details[115] = "Grid reference : SU4699<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[116] = 51.651576;
edna_lon[116] = -1.2786856;
edna_2015[116] = 0;
edna_allocated[116] = 0;
edna_thames[116] = 1
edna_grid_ref[116] = "SU5095";
edna_details[116] = "Grid reference : SU5095<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[117] = 51.417356;
edna_lon[117] = -1.2104747;
edna_2015[117] = 0;
edna_allocated[117] = 0;
edna_thames[117] = 1
edna_grid_ref[117] = "SU5569";
edna_details[117] = "Grid reference : SU5569<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[118] = 51.421062;
edna_lon[118] = -0.63513487;
edna_2015[118] = 0;
edna_allocated[118] = 0;
edna_thames[118] = 1
edna_grid_ref[118] = "SU9570";
edna_details[118] = "Grid reference : SU9570<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[119] = 51.155458;
edna_lon[119] = -1.0576629;
edna_2015[119] = 0;
edna_allocated[119] = 0;
edna_thames[119] = 1
edna_grid_ref[119] = "SU6640";
edna_details[119] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[120] = 51.378703;
edna_lon[120] = -0.8806644;
edna_2015[120] = 0;
edna_allocated[120] = 0;
edna_thames[120] = 1
edna_grid_ref[120] = "SU7865";
edna_details[120] = "Grid reference : SU7865<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[121] = 51.288242;
edna_lon[121] = -0.82550304;
edna_2015[121] = 0;
edna_allocated[121] = 0;
edna_thames[121] = 1
edna_grid_ref[121] = "SU8255";
edna_details[121] = "Grid reference : SU8255<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[122] = 51.413807;
edna_lon[122] = -0.79352925;
edna_2015[122] = 0;
edna_allocated[122] = 0;
edna_thames[122] = 1
edna_grid_ref[122] = "SU8469";
edna_details[122] = "Grid reference : SU8469<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[123] = 51.656521;
edna_lon[123] = -0.78709611;
edna_2015[123] = 0;
edna_allocated[123] = 1;
edna_thames[123] = 1
edna_grid_ref[123] = "SU8496";
edna_details[123] = "Grid reference : SU8496<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[124] = 51.314622;
edna_lon[124] = -0.76743483;
edna_2015[124] = 0;
edna_allocated[124] = 0;
edna_thames[124] = 1
edna_grid_ref[124] = "SU8658";
edna_details[124] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[125] = 51.566019;
edna_lon[125] = -0.73179435;
edna_2015[125] = 0;
edna_allocated[125] = 0;
edna_thames[125] = 1
edna_grid_ref[125] = "SU8886";
edna_details[125] = "Grid reference : SU8886<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[126] = 51.511284;
edna_lon[126] = -0.66126186;
edna_2015[126] = 0;
edna_allocated[126] = 0;
edna_thames[126] = 1
edna_grid_ref[126] = "SU9380";
edna_details[126] = "Grid reference : SU9380<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[127] = 51.555383;
edna_lon[127] = -0.58784479;
edna_2015[127] = 0;
edna_allocated[127] = 0;
edna_thames[127] = 1
edna_grid_ref[127] = "SU9885";
edna_details[127] = "Grid reference : SU9885<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[128] = 51.73088;
edna_lon[128] = -0.26380698;
edna_2015[128] = 0;
edna_allocated[128] = 0;
edna_thames[128] = 1
edna_grid_ref[128] = "TL2005";
edna_details[128] = "Grid reference : TL2005<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[129] = 51.818281;
edna_lon[129] = -0.10084873;
edna_2015[129] = 0;
edna_allocated[129] = 0;
edna_thames[129] = 1
edna_grid_ref[129] = "TL3115";
edna_details[129] = "Grid reference : TL3115<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[130] = 51.708771;
edna_lon[130] = -0.004118918;
edna_2015[130] = 0;
edna_allocated[130] = 0;
edna_thames[130] = 1
edna_grid_ref[130] = "TL3803";
edna_details[130] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[131] = 51.848359;
edna_lon[131] = 0.23436182;
edna_2015[131] = 0;
edna_allocated[131] = 1;
edna_thames[131] = 1
edna_grid_ref[131] = "TL5419";
edna_details[131] = "Grid reference : TL5419<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[132] = 51.545866;
edna_lon[132] = -0.54487446;
edna_2015[132] = 0;
edna_allocated[132] = 0;
edna_thames[132] = 1
edna_grid_ref[132] = "TQ0184";
edna_details[132] = "Grid reference : TQ0184<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[133] = 51.46479;
edna_lon[133] = -0.53305849;
edna_2015[133] = 0;
edna_allocated[133] = 0;
edna_thames[133] = 1
edna_grid_ref[133] = "TQ0275";
edna_details[133] = "Grid reference : TQ0275<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[134] = 51.263536;
edna_lon[134] = -0.28147465;
edna_2015[134] = 0;
edna_allocated[134] = 0;
edna_thames[134] = 1
edna_grid_ref[134] = "TQ2053";
edna_details[134] = "Grid reference : TQ2053<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[135] = 51.424671;
edna_lon[135] = -0.23228506;
edna_2015[135] = 0;
edna_allocated[135] = 0;
edna_thames[135] = 1
edna_grid_ref[135] = "TQ2371";
edna_details[135] = "Grid reference : TQ2371<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[136] = 51.673072;
edna_lon[136] = -0.020151727;
edna_2015[136] = 0;
edna_allocated[136] = 0;
edna_thames[136] = 1
edna_grid_ref[136] = "TQ3799";
edna_details[136] = "Grid reference : TQ3799<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[137] = 51.393025;
edna_lon[137] = 0.053980844;
edna_2015[137] = 0;
edna_allocated[137] = 1;
edna_thames[137] = 1
edna_grid_ref[137] = "TQ4368";
edna_details[137] = "Grid reference : TQ4368<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[138] = 51.597876;
edna_lon[138] = 0.16428629;
edna_2015[138] = 0;
edna_allocated[138] = 0;
edna_thames[138] = 1
edna_grid_ref[138] = "TQ5091";
edna_details[138] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[139] = 51.291851;
edna_lon[139] = 0.17854969;
edna_2015[139] = 0;
edna_allocated[139] = 1;
edna_thames[139] = 1
edna_grid_ref[139] = "TQ5257";
edna_details[139] = "Grid reference : TQ5257<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[140] = 51.390149;
edna_lon[140] = 0.21196412;
edna_2015[140] = 0;
edna_allocated[140] = 0;
edna_thames[140] = 1
edna_grid_ref[140] = "TQ5468";
edna_details[140] = "Grid reference : TQ5468<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[141] = 51.614493;
edna_lon[141] = 0.23730076;
edna_2015[141] = 0;
edna_allocated[141] = 1;
edna_thames[141] = 1
edna_grid_ref[141] = "TQ5593";
edna_details[141] = "Grid reference : TQ5593<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[142] = 52.013382;
edna_lon[142] = -2.1034041;
edna_2015[142] = 1;
edna_allocated[142] = 1;
edna_thames[142] = 0
edna_grid_ref[142] = "SO9335";
edna_details[142] = "Grid reference : SO9335<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
edna_lat[143] = 52.040354;
edna_lon[143] = -2.1034665;
edna_2015[143] = 1;
edna_allocated[143] = 1;
edna_thames[143] = 0
edna_grid_ref[143] = "SO9338";
edna_details[143] = "Grid reference : SO9338<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"


//Environmental:
environmental_lat[0] = 54.4307628475;
environmental_lon[0] = -3.527659312;
environmental_2015[0] = 1;
environmental_allocated[0] = 0;
environmental_grid_ref[0] = "NY0105";
environmental_details[0] = "Grid reference : NY0105<BR>County : Cumbria<BR>"
environmental_lat[1] = 54.6883510857;
environmental_lon[1] = -2.94779663411;
environmental_2015[1] = 1;
environmental_allocated[1] = 0;
environmental_grid_ref[1] = "NY3933";
environmental_details[1] = "Grid reference : NY3933<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[2] = 54.6437774348;
environmental_lon[2] = -2.9002706725;
environmental_2015[2] = 1;
environmental_allocated[2] = 0;
environmental_grid_ref[2] = "NY4228";
environmental_details[2] = "Grid reference : NY4228<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[3] = 54.896413;
environmental_lon[3] = -2.7499553;
environmental_2015[3] = 1;
environmental_allocated[3] = 1;
environmental_grid_ref[3] = "NY5256";
environmental_details[3] = "Grid reference : NY5256<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[4] = 51.3003136685;
environmental_lon[4] = 1.01110858797;
environmental_2015[4] = 0;
environmental_allocated[4] = 0;
environmental_grid_ref[4] = "TR1060";
environmental_details[4] = "Grid reference : TR1060<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[5] = 54.7633240335;
environmental_lon[5] = -2.39005104931;
environmental_2015[5] = 1;
environmental_allocated[5] = 0;
environmental_grid_ref[5] = "NY7541";
environmental_details[5] = "Grid reference : NY7541<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[6] = 54.570354;
environmental_lon[6] = -3.0842522;
environmental_2015[6] = 1;
environmental_allocated[6] = 0;
environmental_grid_ref[6] = "NY3020";
environmental_details[6] = "Grid reference : NY3020<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[7] = 54.8624003301;
environmental_lon[7] = -2.31310980661;
environmental_2015[7] = 1;
environmental_allocated[7] = 0;
environmental_grid_ref[7] = "NY8052";
environmental_details[7] = "Grid reference : NY8052<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[8] = 54.617354;
environmental_lon[8] = -2.8222412;
environmental_2015[8] = 1;
environmental_allocated[8] = 0;
environmental_grid_ref[8] = "NY4725";
environmental_details[8] = "Grid reference : NY4725<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[9] = 54.4041143375;
environmental_lon[9] = -2.29420380625;
environmental_2015[9] = 1;
environmental_allocated[9] = 0;
environmental_grid_ref[9] = "NY8101";
environmental_details[9] = "Grid reference : NY8101<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[10] = 54.4493082984;
environmental_lon[10] = -2.15572891658;
environmental_2015[10] = 1;
environmental_allocated[10] = 0;
environmental_grid_ref[10] = "NY9006";
environmental_details[10] = "Grid reference : NY9006<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[11] = 54.581617;
environmental_lon[11] = -2.7905769;
environmental_2015[11] = 1;
environmental_allocated[11] = 0;
environmental_grid_ref[11] = "NY4921";
environmental_details[11] = "Grid reference : NY4921<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[12] = 54.8807509813;
environmental_lon[12] = -2.07945622193;
environmental_2015[12] = 1;
environmental_allocated[12] = 1;
environmental_grid_ref[12] = "NY9554";
environmental_details[12] = "Grid reference : NY9554<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[13] = 55.2402261829;
environmental_lon[13] = -1.98581151469;
environmental_2015[13] = 0;
environmental_allocated[1] = 0;
environmental_grid_ref[13] = "NZ0194";
environmental_details[13] = "Grid reference : NZ0194<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[14] = 54.6740362298;
environmental_lon[14] = -1.89296706473;
environmental_2015[14] = 1;
environmental_allocated[14] = 0;
environmental_grid_ref[14] = "NZ0731";
environmental_details[14] = "Grid reference : NZ0731<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[15] = 53.999383;
environmental_lon[15] = -1.6048597;
environmental_2015[15] = 1;
environmental_allocated[15] = 0;
environmental_grid_ref[15] = "NZ0912";
environmental_details[15] = "Grid reference : NZ0912<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[16] = 54.9705431189;
environmental_lon[16] = -1.84531672967;
environmental_2015[16] = 1;
environmental_allocated[16] = 0;
environmental_grid_ref[16] = "NZ1064";
environmental_details[16] = "Grid reference : NZ1064<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[17] = 54.655874;
environmental_lon[17] = -1.7690198;
environmental_2015[17] = 1;
environmental_allocated[17] = 0;
environmental_grid_ref[17] = "NZ1529";
environmental_details[17] = "Grid reference : NZ1529<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[18] = 54.916529442;
environmental_lon[18] = -1.78312312644;
environmental_2015[18] = 1;
environmental_allocated[18] = 0;
environmental_grid_ref[18] = "NZ1458";
environmental_details[18] = "Grid reference : NZ1458<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[19] = 54.952318;
environmental_lon[19] = -2.282578;
environmental_2015[19] = 1;
environmental_allocated[19] = 0;
environmental_grid_ref[19] = "NY8262";
environmental_details[19] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[20] = 55.069068;
environmental_lon[20] = -1.6883529;
environmental_2015[20] = 1;
environmental_allocated[20] = 0;
environmental_grid_ref[20] = "NZ2075";
environmental_details[20] = "Grid reference : NZ2075<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[21] = 55.0241204107;
environmental_lon[21] = -1.67304870688;
environmental_2015[21] = 1;
environmental_allocated[21] = 0;
environmental_grid_ref[21] = "NZ2170";
environmental_details[21] = "Grid reference : NZ2170<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[22] = 51.284492;
environmental_lon[22] = -2.388528;
environmental_2015[22] = 0;
environmental_allocated[22] = 0;
environmental_grid_ref[22] = "ST7354";
environmental_details[22] = "Grid reference : ST7354<BR>County : Somerset<BRr><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[23] = 55.1496356858;
environmental_lon[23] = -1.57787647486;
environmental_2015[23] = 1;
environmental_allocated[23] = 0;
environmental_grid_ref[23] = "NZ2784";
environmental_details[23] = "Grid reference : NZ2784<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[24] = 54.5113765651;
environmental_lon[24] = -1.52270090647;
environmental_2015[24] = 1;
environmental_allocated[24] = 0;
environmental_grid_ref[24] = "NZ3113";
environmental_details[24] = "Grid reference : NZ3113<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[25] = 54.511250705;
environmental_lon[25] = -1.49181126134;
environmental_2015[25] = 1;
environmental_allocated[25] = 0;
environmental_grid_ref[25] = "NZ3313";
environmental_details[25] = "Grid reference : NZ3313<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[26] = 54.6095992921;
environmental_lon[26] = -1.38220705917;
environmental_2015[26] = 1;
environmental_allocated[26] = 0;
environmental_grid_ref[26] = "NZ4024";
environmental_details[26] = "Grid reference : NZ4024<BR>County : Cleveland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[27] = 54.491363;
environmental_lon[27] = -1.1524352;
environmental_2015[27] = 1;
environmental_allocated[27] = 0;
environmental_grid_ref[27] = "NZ5511";
environmental_details[27] = "Grid reference : NZ5511<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[28] = 53.5636489346;
environmental_lon[28] = -3.08855565622;
environmental_2015[28] = 1;
environmental_allocated[28] = 0;
environmental_grid_ref[28] = "SD2808";
environmental_details[28] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[29] = 55.141288;
environmental_lon[29] = -2.1270385;
environmental_2015[29] = 1;
environmental_allocated[29] = 0;
environmental_grid_ref[29] = "NY9283";
environmental_details[29] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[30] = 55.024417;
environmental_lon[30] = -1.829475;
environmental_2015[30] = 1;
environmental_allocated[30] = 0;
environmental_grid_ref[30] = "NZ1170";
environmental_details[30] = "Grid reference : NZ1170<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[31] = 53.81962;
environmental_lon[31] = -2.3964125;
environmental_2015[31] = 1;
environmental_allocated[31] = 0;
environmental_grid_ref[31] = "SD7436";
environmental_details[31] = "Grid reference : SD7436<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[32] = 55.176621;
environmental_lon[32] = -1.5933067;
environmental_2015[32] = 1;
environmental_allocated[32] = 0;
environmental_grid_ref[32] = "NZ2687";
environmental_details[32] = "Grid reference : NZ2687<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[33] = 54.195109;
environmental_lon[33] = -2.7985071;
environmental_2015[33] = 1;
environmental_allocated[33] = 0;
environmental_grid_ref[33] = "SD4878";
environmental_details[33] = "Grid reference : SD4878<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[34] = 54.1773423001;
environmental_lon[34] = -2.76754026252;
environmental_2015[34] = 1;
environmental_allocated[34] = 0;
environmental_grid_ref[34] = "SD5076";
environmental_details[34] = "Grid reference : SD5076<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[35] = 54.754227;
environmental_lon[35] = -1.5820112;
environmental_2015[35] = 1;
environmental_allocated[35] = 0;
environmental_grid_ref[35] = "NZ2740";
environmental_details[35] = "Grid reference : NZ2740<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[36] = 54.354977;
environmental_lon[36] = -3.0477974;
environmental_2015[36] = 1;
environmental_allocated[36] = 0;
environmental_grid_ref[36] = "SD3296";
environmental_details[36] = "Grid reference : SD3296<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[37] = 53.762403;
environmental_lon[37] = -2.9723058;
environmental_2015[37] = 1;
environmental_allocated[37] = 0;
environmental_grid_ref[37] = "SD3630";
environmental_details[37] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[38] = 53.584285;
environmental_lon[38] = -2.741628;
environmental_2015[38] = 1;
environmental_allocated[38] = 0;
environmental_grid_ref[38] = "SD5110";
environmental_details[38] = "Grid reference : SD5110<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[39] = 53.8551716738;
environmental_lon[39] = -2.5031806391;
environmental_2015[39] = 1;
environmental_allocated[39] = 0;
environmental_grid_ref[39] = "SD6740";
environmental_details[39] = "Grid reference : SD6740<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[40] = 54.374071;
environmental_lon[40] = -2.9097355;
environmental_2015[40] = 1;
environmental_allocated[40] = 0;
environmental_grid_ref[40] = "SD4198";
environmental_details[40] = "Grid reference : SD4198<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[41] = 53.5680016253;
environmental_lon[41] = -2.37896769846;
environmental_2015[41] = 1;
environmental_allocated[41] = 0;
environmental_grid_ref[41] = "SD7508";
environmental_details[41] = "Grid reference : SD7508<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[42] = 54.347669;
environmental_lon[42] = -2.832231;
environmental_2015[42] = 1;
environmental_allocated[42] = 0;
environmental_grid_ref[42] = "SD4695";
environmental_details[42] = "Grid reference : SD4695<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[43] = 53.999383;
environmental_lon[43] = -1.6048597;
environmental_2015[43] = 1;
environmental_allocated[43] = 0;
environmental_grid_ref[43] = "SE2656";
environmental_details[43] = "Grid reference :SE2656<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[44] = 54.089552;
environmental_lon[44] = -2.2919661;
environmental_2015[44] = 0;
environmental_allocated[44] = 0;
environmental_grid_ref[44] = "SD8166";
environmental_details[44] = "Grid reference : SD8166<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[45] = 53.8558058247;
environmental_lon[45] = -1.68222323753;
environmental_2015[45] = 1;
environmental_allocated[45] = 0;
environmental_grid_ref[45] = "SE2140";
environmental_details[45] = "Grid reference : SE2140<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[46] = 53.5321912834;
environmental_lon[46] = -1.66956411567;
environmental_2015[46] = 0;
environmental_allocated[46] = 0;
environmental_grid_ref[46] = "SE2204";
environmental_details[46] = "Grid reference : SE2204<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[47] = 54.1071301395;
environmental_lon[47] = -1.5732403619;
environmental_2015[47] = 1;
environmental_allocated[47] = 0;
environmental_grid_ref[47] = "SE2868";
environmental_details[47] = "Grid reference : SE2868<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[48] = 53.810945;
environmental_lon[48] = -1.7129387;
environmental_2015[48] = 1;
environmental_allocated[48] = 0;
environmental_grid_ref[48] = "SE1935";
environmental_details[48] = "Grid reference : SE1935<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[49] = 51.404148;
environmental_lon[49] = 0.41394017;
environmental_2015[49] = 0;
environmental_allocated[49] = 0;
environmental_grid_ref[49] = "TQ6870";
environmental_details[49] = "Grid reference : TQ6870<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[50] = 53.8618727747;
environmental_lon[50] = -1.10436872659;
environmental_2015[50] = 1;
environmental_allocated[50] = 0;
environmental_grid_ref[50] = "SE5941";
environmental_details[50] = "Grid reference : SE5941<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[51] = 53.70661;
environmental_lon[51] = -0.81984105;
environmental_2015[51] = 1;
environmental_allocated[51] = 0;
environmental_grid_ref[51] = "SE7824";
environmental_details[51] = "Grid reference : SE7824<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[52] = 53.9507690454;
environmental_lon[52] = -0.980559483749;
environmental_2015[52] = 1;
environmental_allocated[52] = 0;
environmental_grid_ref[52] = "SE6751";
environmental_details[52] = "Grid reference : SE6751<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[53] = 54.0405025302;
environmental_lon[53] = -0.963093743651;
environmental_2015[53] = 1;
environmental_allocated[53] = 0;
environmental_grid_ref[53] = "SE6861";
environmental_details[53] = "Grid reference : SE6861<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[54] = 53.5448462145;
environmental_lon[54] = -0.824325752096;
environmental_2015[54] = 0;
environmental_allocated[54] = 0;
environmental_grid_ref[54] = "SE7806";
environmental_details[54] = "Grid reference : SE7806<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[55] = 54.2364659672;
environmental_lon[55] = -0.77406438985;
environmental_2015[55] = 1;
environmental_allocated[55] = 0;
environmental_grid_ref[55] = "SE8083";
environmental_details[55] = "Grid reference : SE8083<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[56] = 54.0284966232;
environmental_lon[56] = -0.658053447978;
environmental_2015[56] = 1;
environmental_allocated[56] = 0;
environmental_grid_ref[56] = "SE8860";
environmental_details[56] = "Grid reference : SE8860<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[57] = 53.7763867289;
environmental_lon[57] = -0.620583207155;
environmental_2015[57] = 1;
environmental_allocated[57] = 1;
environmental_grid_ref[57] = "SE9132";
environmental_details[57] = "Grid reference : SE9132<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[58] = 53.9639911006;
environmental_lon[58] = -0.522932667049;
environmental_2015[58] = 1;
environmental_allocated[58] = 0;
environmental_grid_ref[58] = "SE9753";
environmental_details[58] = "Grid reference : SE9753<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[59] = 53.5954118476;
environmental_lon[59] = -0.520710744908;
environmental_2015[59] = 1;
environmental_allocated[59] = 1;
environmental_grid_ref[59] = "SE9812";
environmental_details[59] = "Grid reference : SE9812<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[60] = 52.9130687779;
environmental_lon[60] = -4.49997202286;
environmental_2015[60] = 1;
environmental_allocated[60] = 0;
environmental_grid_ref[60] = "SH3238";
environmental_details[60] = "Grid reference : SH3238<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[61] = 53.3624101824;
environmental_lon[61] = -4.51118015931;
environmental_2015[61] = 1;
environmental_allocated[61] = 0;
environmental_grid_ref[61] = "SH3388";
environmental_details[61] = "Grid reference : SH3388<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[62] = 52.9514384309;
environmental_lon[62] = -4.3830836192;
environmental_2015[62] = 1;
environmental_allocated[62] = 0;
environmental_grid_ref[62] = "SH4042";
environmental_details[62] = "Grid reference : SH4042<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[63] = 53.1400492094;
environmental_lon[63] = -4.39351482049;
environmental_2015[63] = 1;
environmental_allocated[63] = 0;
environmental_grid_ref[63] = "SH4063";
environmental_details[63] = "Grid reference : SH4063<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[64] = 53.302018;
environmental_lon[64] = -4.3875014;
environmental_2015[64] = 1;
environmental_allocated[64] = 1;
environmental_grid_ref[64] = "SH4181";
environmental_details[64] = "Grid reference : SH4181<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[65] = 53.3921210935;
environmental_lon[65] = -4.37755850085;
environmental_2015[65] = 1;
environmental_allocated[65] = 0;
environmental_grid_ref[65] = "SH4291";
environmental_details[65] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[66] = 53.2765437624;
environmental_lon[66] = -4.31113553084;
environmental_2015[66] = 1;
environmental_allocated[66] = 0;
environmental_grid_ref[66] = "SH4678";
environmental_details[66] = "Grid reference : SH4678<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[67] = 52.5889545227;
environmental_lon[67] = -4.05332268023;
environmental_2015[67] = 1;
environmental_allocated[67] = 0;
environmental_grid_ref[67] = "SH6101";
environmental_details[67] = "Grid reference : SH6101<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[68] = 52.9675501917;
environmental_lon[68] = -3.99676450211;
environmental_2015[68] = 1;
environmental_allocated[68] = 0;
environmental_grid_ref[68] = "SH6643";
environmental_details[68] = "Grid reference : SH6643<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[69] = 52.8701874295;
environmental_lon[69] = -3.90313814227;
environmental_2015[69] = 1;
environmental_allocated[69] = 0;
environmental_grid_ref[69] = "SH7232";
environmental_details[69] = "Grid reference : SH7232<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[70] = 53.1865040942;
environmental_lon[70] = -3.79737805126;
environmental_2015[70] = 1;
environmental_allocated[70] = 0;
environmental_grid_ref[70] = "SH8067";
environmental_details[70] = "Grid reference : SH8067<BR>County : Conwy - Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[71] = 53.0699262925;
environmental_lon[71] = -3.77759226968;
environmental_2015[71] = 1;
environmental_allocated[71] = 0;
environmental_grid_ref[71] = "SH8154";
environmental_details[71] = "Grid reference : SH8154<BR>County : Conwy - Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[72] = 53.2907636017;
environmental_lon[72] = -3.3966620632;
environmental_2015[72] = 1;
environmental_allocated[72] = 0;
environmental_grid_ref[72] = "SJ0778";
environmental_details[72] = "Grid reference : SJ0778<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[73] = 52.8242997247;
environmental_lon[73] = -3.30744776728;
environmental_2015[73] = 1;
environmental_allocated[73] = 0;
environmental_grid_ref[73] = "SJ1226";
environmental_details[73] = "Grid reference : SJ1226<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[74] = 52.6267374656;
environmental_lon[74] = -3.28677673972;
environmental_2015[74] = 1;
environmental_allocated[74] = 0;
environmental_grid_ref[74] = "SJ1304";
environmental_details[74] = "Grid reference : SJ1304<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[75] = 52.7172422833;
environmental_lon[75] = -3.2302183645;
environmental_2015[75] = 1;
environmental_allocated[75] = 0;
environmental_grid_ref[75] = "SJ1714";
environmental_details[75] = "Grid reference : SJ1714<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[76] = 53.2388140454;
environmental_lon[76] = -3.21515485731;
environmental_2015[76] = 1;
environmental_allocated[76] = 0;
environmental_grid_ref[76] = "SJ1972";
environmental_details[76] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[77] = 53.2031673532;
environmental_lon[77] = -3.18420223255;
environmental_2015[77] = 1;
environmental_allocated[77] = 0;
environmental_grid_ref[77] = "SJ2168";
environmental_details[77] = "Grid reference : SJ2168<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[78] = 52.6730471091;
environmental_lon[78] = -3.15502613582;
environmental_2015[78] = 1;
environmental_allocated[78] = 1;
environmental_grid_ref[78] = "SJ2209";
environmental_details[78] = "Grid reference : SJ2209<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[79] = 52.7361064011;
environmental_lon[79] = -3.14188107572;
environmental_2015[79] = 1;
environmental_allocated[79] = 1;
environmental_grid_ref[79] = "SJ2316";
environmental_details[79] = "Grid reference : SJ2316<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[80] = 53.059663819;
environmental_lon[80] = -3.15041875657;
environmental_2015[80] = 1;
environmental_allocated[80] = 0;
environmental_grid_ref[80] = "SJ2352";
environmental_details[80] = "Grid reference : SJ2352<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[81] = 53.1586686845;
environmental_lon[81] = -3.13810779667;
environmental_2015[81] = 1;
environmental_allocated[81] = 0;
environmental_grid_ref[81] = "SJ2463";
environmental_details[81] = "Grid reference : SJ2463<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[82] = 53.3656577161;
environmental_lon[82] = -3.11355946081;
environmental_2015[82] = 1;
environmental_allocated[82] = 1;
environmental_grid_ref[82] = "SJ2686";
environmental_details[82] = "Grid reference : SJ2686<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[83] = 53.0253081917;
environmental_lon[83] = -2.97058296714;
environmental_2015[83] = 1;
environmental_allocated[83] = 0;
environmental_grid_ref[83] = "SJ3548";
environmental_details[83] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[84] = 53.1894075445;
environmental_lon[84] = -2.630050836;
environmental_2015[84] = 1;
environmental_allocated[84] = 0;
environmental_grid_ref[84] = "SJ3877";
environmental_details[84] = "Grid reference : SJ3877<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[85] = 53.0976847836;
environmental_lon[85] = -2.91247124262;
environmental_2015[85] = 1;
environmental_allocated[85] = 0;
environmental_grid_ref[85] = "SJ3956";
environmental_details[85] = "Grid reference : SJ3956<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[86] = 53.978926;
environmental_lon[86] = -1.132372;
environmental_2015[86] = 1;
environmental_allocated[86] = 0;
environmental_grid_ref[86] = "SE5754";
environmental_details[86] = "Grid reference : SE5754<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[87] = 52.6850621807;
environmental_lon[87] = -2.78549704035;
environmental_2015[87] = 1;
environmental_allocated[87] = 1;
environmental_grid_ref[87] = "SJ4710";
environmental_details[87] = "Grid reference : SJ4710<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[88] = 53.404714;
environmental_lon[88] = -2.7084167;
environmental_2015[88] = 1;
environmental_allocated[88] = 0;
environmental_grid_ref[88] = "SJ5390";
environmental_details[88] = "Grid reference : SJ5390<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[89] = 53.4236821689;
environmental_lon[89] = -2.51312008068;
environmental_2015[89] = 1;
environmental_allocated[89] = 0;
environmental_grid_ref[89] = "SJ6692";
environmental_details[89] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[90] = 53.834201;
environmental_lon[90] = -1.0138015;
environmental_2015[90] = 1;
environmental_allocated[90] = 0;
environmental_grid_ref[90] = "SE6538";
environmental_details[90] = "Grid reference : SE6538<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[91] = 53.316335;
environmental_lon[91] = -2.3767204;
environmental_2015[91] = 1;
environmental_allocated[91] = 1;
environmental_grid_ref[91] = "SJ7580";
environmental_details[91] = "Grid reference : SJ7580<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[92] = 53.268717;
environmental_lon[92] = -4.2506704;
environmental_2015[92] = 1;
environmental_allocated[92] = 0;
environmental_grid_ref[92] = "SH5077";
environmental_details[92] = "Grid reference : SH5077<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[93] = 53.1996826179;
environmental_lon[93] = -2.30086157074;
environmental_2015[93] = 1;
environmental_allocated[93] = 0;
environmental_grid_ref[93] = "SJ8067";
environmental_details[93] = "Grid reference : SJ8067<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[94] = 52.650143;
environmental_lon[94] = -3.5830748;
environmental_2015[94] = 1;
environmental_allocated[94] = 0;
environmental_grid_ref[94] = "SH9307";
environmental_details[94] = "Grid reference : SH9307<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[95] = 53.0741901076;
environmental_lon[95] = -2.07609135513;
environmental_2015[95] = 1;
environmental_allocated[95] = 1;
environmental_grid_ref[95] = "SJ9553";
environmental_details[95] = "Grid reference : SJ9553<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[96] = 53.469736;
environmental_lon[96] = -2.0014677;
environmental_2015[96] = 1;
environmental_allocated[96] = 1;
environmental_grid_ref[96] = "SK0097";
environmental_details[96] = "Grid reference : SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[97] = 52.6517018;
environmental_lon[97] = -1.97188173971;
environmental_2015[97] = 1;
environmental_allocated[97] = 0;
environmental_grid_ref[97] = "SK0206";
environmental_details[97] = "Grid reference : SK0206<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[98] = 53.3168599109;
environmental_lon[98] = -1.8813815622;
environmental_2015[98] = 0;
environmental_allocated[98] = 1;
environmental_grid_ref[98] = "SK0880";
environmental_details[98] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[99] = 53.2447384209;
environmental_lon[99] = -1.74671074386;
environmental_2015[99] = 0;
environmental_allocated[99] = 1;
environmental_grid_ref[99] = "SK1772";
environmental_details[99] = "Grid reference : SK1772<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[100] = 53.0827945789;
environmental_lon[100] = -1.68794508287;
environmental_2015[100] = 0;
environmental_allocated[100] = 0;
environmental_grid_ref[100] = "SK2154";
environmental_details[100] = "Grid reference : SK2154<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[101] = 52.801204;
environmental_lon[101] = -2.8913917;
environmental_2015[101] = 1;
environmental_allocated[101] = 0;
environmental_grid_ref[101] = "SJ4023";
environmental_details[101] = "Grid reference : SJ4023<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[102] = 53.223755;
environmental_lon[102] = -2.8851659;
environmental_2015[102] = 1;
environmental_allocated[102] = 0;
environmental_grid_ref[102] = "SJ4170";
environmental_details[102] = "Grid reference : SJ4170<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[103] = 53.4223282006;
environmental_lon[103] = -1.23402016174;
environmental_2015[103] = 0;
environmental_allocated[103] = 1;
environmental_grid_ref[103] = "SK5192";
environmental_details[103] = "Grid reference : SK5192<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[104] = 52.6039814039;
environmental_lon[104] = -1.18931015913;
environmental_2015[104] = 1;
environmental_allocated[104] = 0;
environmental_grid_ref[104] = "SK5501";
environmental_details[104] = "Grid reference : SK5501<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[105] = 53.304980204;
environmental_lon[105] = -1.161086588;
environmental_2015[105] = 0;
environmental_allocated[105] = 1;
environmental_grid_ref[105] = "SK5679";
environmental_details[105] = "Grid reference : SK5679<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[106] = 53.439456;
environmental_lon[106] = -2.889644;
environmental_2015[106] = 1;
environmental_allocated[106] = 0;
environmental_grid_ref[106] = "SJ4194";
environmental_details[106] = "Grid reference : SJ4194<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[107] = 53.4123953519;
environmental_lon[107] = -1.09879457544;
environmental_2015[107] = 0;
environmental_allocated[107] = 1;
environmental_grid_ref[107] = "SK6091";
environmental_details[107] = "Grid reference : SK6091<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[108] = 53.4835787171;
environmental_lon[108] = -1.00686530245;
environmental_2015[108] = 0;
environmental_allocated[108] = 1;
environmental_grid_ref[108] = "SK6699";
environmental_details[108] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[109] = 52.619598;
environmental_lon[109] = -0.89359904;
environmental_2015[109] = 1;
environmental_allocated[109] = 1;
environmental_grid_ref[109] = "SK7503";
environmental_details[109] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[110] = 52.8901394689;
environmental_lon[110] = -0.990755839487;
environmental_2015[110] = 0;
environmental_allocated[110] = 0;
environmental_grid_ref[110] = "SK6833";
environmental_details[110] = "Grid reference : SK6833<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[111] = 52.6185582592;
environmental_lon[111] = -0.790211513714;
environmental_2015[111] = 1;
environmental_allocated[111] = 0;
environmental_grid_ref[111] = "SK8203";
environmental_details[111] = "Grid reference : SK8203<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[112] = 52.6176202019;
environmental_lon[112] = -0.701608613026;
environmental_2015[112] = 1;
environmental_allocated[112] = 0;
environmental_grid_ref[112] = "SK8803";
environmental_details[112] = "Grid reference : SK8803<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[113] = 53.200759069;
environmental_lon[113] = -0.594223128246;
environmental_2015[113] = 0;
environmental_allocated[113] = 0;
environmental_grid_ref[113] = "SK9468";
environmental_details[113] = "Grid reference : SK9468<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[114] = 53.2097453992;
environmental_lon[114] = -0.593928967559;
environmental_2015[114] = 0;
environmental_allocated[114] = 0;
environmental_grid_ref[114] = "SK9469";
environmental_details[114] = "Grid reference : SK9469<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[115] = 52.9755621508;
environmental_lon[115] = -0.556862852654;
environmental_2015[115] = 0;
environmental_allocated[115] = 0;
environmental_grid_ref[115] = "SK9743";
environmental_details[115] = "Grid reference : SK9743<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[116] = 51.8408365095;
environmental_lon[116] = -4.97730643416;
environmental_2015[116] = 0;
environmental_allocated[116] = 1;
environmental_grid_ref[116] = "SM9520";
environmental_details[116] = "Grid reference : SM9520<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[117] = 51.9500430184;
environmental_lon[117] = -4.92631990569;
environmental_2015[117] = 0;
environmental_allocated[117] = 0;
environmental_grid_ref[117] = "SM9932";
environmental_details[117] = "Grid reference : SM9932<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[118] = 51.8442179313;
environmental_lon[118] = -4.44029294545;
environmental_2015[118] = 0;
environmental_allocated[118] = 0;
environmental_grid_ref[118] = "SN3219";
environmental_details[118] = "Grid reference : SN3219<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[119] = 52.1690933854;
environmental_lon[119] = -4.38491350858;
environmental_2015[119] = 1;
environmental_allocated[119] = 0;
environmental_grid_ref[119] = "SN3755";
environmental_details[119] = "Grid reference : SN3755<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[120] = 51.7309072275;
environmental_lon[120] = -4.26039187235;
environmental_2015[120] = 0;
environmental_allocated[120] = 1;
environmental_grid_ref[120] = "SN4406";
environmental_details[120] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[121] = 52.1923503245;
environmental_lon[121] = -4.10815100409;
environmental_2015[121] = 1;
environmental_allocated[121] = 0;
environmental_grid_ref[121] = "SN5657";
environmental_details[121] = "Grid reference : SN5657<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[122] = 51.9610073992;
environmental_lon[122] = -3.96627334163;
environmental_2015[122] = 0;
environmental_allocated[122] = 0;
environmental_grid_ref[122] = "SN6531";
environmental_details[122] = "Grid reference : SN6531<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[123] = 51.7276154188;
environmental_lon[123] = -3.94164665217;
environmental_2015[123] = 0;
environmental_allocated[123] = 0;
environmental_grid_ref[123] = "SN6605";
environmental_details[123] = "Grid reference : SN6605<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[124] = 52.5457764465;
environmental_lon[124] = -3.94806516098;
environmental_2015[124] = 1;
environmental_allocated[124] = 0;
environmental_grid_ref[124] = "SN6896";
environmental_details[124] = "Grid reference : SN6896<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[125] = 52.3939823298;
environmental_lon[125] = -3.8825808494;
environmental_2015[125] = 0;
environmental_allocated[125] = 0;
environmental_grid_ref[125] = "SN7279";
environmental_details[125] = "Grid reference : SN7279<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[126] = 51.7204850018;
environmental_lon[126] = -3.82551532146;
environmental_2015[126] = 0;
environmental_allocated[126] = 0;
environmental_grid_ref[126] = "SN7404";
environmental_details[126] = "Grid reference : SN7404<BR>County : Castell-nedd Port Talbot - Neath Port Talbot<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[127] = 51.9006657048;
environmental_lon[127] = -3.80373958817;
environmental_2015[127] = 1;
environmental_allocated[127] = 0;
environmental_grid_ref[127] = "SN7624";
environmental_details[127] = "Grid reference : SN7624<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[128] = 52.721327;
environmental_lon[128] = -2.7417053;
environmental_2015[128] = 1;
environmental_allocated[128] = 1;
environmental_grid_ref[128] = "SJ5014";
environmental_details[128] = "Grid reference : SJ5014<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[129] = 51.7348949493;
environmental_lon[129] = -3.43507167953;
environmental_2015[129] = 0;
environmental_allocated[129] = 1;
environmental_grid_ref[129] = "SO0105";
environmental_details[129] = "Grid reference : SO0105<BR>County : Rhondda Cynon Taf - Rhondda Cynon Taf<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[130] = 51.7979901384;
environmental_lon[130] = -3.42257186559;
environmental_2015[130] = 0;
environmental_allocated[130] = 0;
environmental_grid_ref[130] = "SO0212";
environmental_details[130] = "Grid reference : SO0212<BR>County : Merthyr Tudful - Merthyr Tydfil<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[131] = 51.8788852824;
environmental_lon[131] = -3.42512399392;
environmental_2015[131] = 1;
environmental_allocated[131] = 0;
environmental_grid_ref[131] = "SO0221";
environmental_details[131] = "Grid reference : SO0221<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[132] = 52.3644088498;
environmental_lon[132] = -3.42601044244;
environmental_2015[132] = 1;
environmental_allocated[132] = 0;
environmental_grid_ref[132] = "SO0375";
environmental_details[132] = "Grid reference : SO0375<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[133] = 52.4641369769;
environmental_lon[133] = -3.35563025193;
environmental_2015[133] = 1;
environmental_allocated[133] = 0;
environmental_grid_ref[133] = "SO0886";
environmental_details[133] = "Grid reference : SO0886<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[134] = 52.0957964621;
environmental_lon[134] = -3.32983663302;
environmental_2015[134] = 1;
environmental_allocated[134] = 1;
environmental_grid_ref[134] = "SO0945";
environmental_details[134] = "Grid reference : SO0945<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[135] = 52.5284972133;
environmental_lon[135] = -3.22493708831;
environmental_2015[135] = 1;
environmental_allocated[135] = 0;
environmental_grid_ref[135] = "SO1793";
environmental_details[135] = "Grid reference : SO1793<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[136] = 52.2230462845;
environmental_lon[136] = -3.20187369128;
environmental_2015[136] = 1;
environmental_allocated[136] = 1;
environmental_grid_ref[136] = "SO1859";
environmental_details[136] = "Grid reference : SO1859<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[137] = 52.3309079275;
environmental_lon[137] = -3.20479529573;
environmental_2015[137] = 1;
environmental_allocated[137] = 0;
environmental_grid_ref[137] = "SO1871";
environmental_details[137] = "Grid reference : SO1871<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[138] = 52.5669006101;
environmental_lon[138] = -2.96043144929;
environmental_2015[138] = 1;
environmental_allocated[138] = 1;
environmental_grid_ref[138] = "SO3597";
environmental_details[138] = "Grid reference : SO3597<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[139] = 51.8569747793;
environmental_lon[139] = -2.91620014672;
environmental_2015[139] = 0;
environmental_allocated[139] = 1;
environmental_grid_ref[139] = "SO3718";
environmental_details[139] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[140] = 51.8123554691;
environmental_lon[140] = -2.87177630776;
environmental_2015[140] = 0;
environmental_allocated[140] = 0;
environmental_grid_ref[140] = "SO4013";
environmental_details[140] = "Grid reference : SO4013<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[141] = 52.685811;
environmental_lon[141] = -2.6671356;
environmental_2015[141] = 1;
environmental_allocated[141] = 0;
environmental_grid_ref[141] = "SJ5510";
environmental_details[141] = "Grid reference : SJ5510<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[142] = 52.650658;
environmental_lon[142] = -2.5040031;
environmental_2015[142] = 1;
environmental_allocated[142] = 1;
environmental_grid_ref[142] = "SJ6606";
environmental_details[142] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[143] = 51.741636;
environmental_lon[143] = -2.6965827;
environmental_2015[143] = 0;
environmental_allocated[143] = 1;
environmental_grid_ref[143] = "SO5205";
environmental_details[143] = "Grid reference : SO5205<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[144] = 51.8135169449;
environmental_lon[144] = -2.69772046644;
environmental_2015[144] = 0;
environmental_allocated[144] = 0;
environmental_grid_ref[144] = "SO5213";
environmental_details[144] = "Grid reference : SO5213<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[145] = 52.3531765531;
environmental_lon[145] = -2.66213977064;
environmental_2015[145] = 1;
environmental_allocated[145] = 0;
environmental_grid_ref[145] = "SO5573";
environmental_details[145] = "Grid reference : SO5573<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/SO5573.pdf'>View site details</a><br><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[146] = 51.7689715416;
environmental_lon[146] = -2.62457271904;
environmental_2015[146] = 0;
environmental_allocated[146] = 0;
environmental_grid_ref[146] = "SO5708";
environmental_details[146] = "Grid reference : SO5708<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[147] = 52.686738;
environmental_lon[147] = -2.4748312;
environmental_2015[147] = 1;
environmental_allocated[147] = 1;
environmental_grid_ref[147] = "SJ6810";
environmental_details[147] = "Grid reference : SJ6810<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[148] = 52.739396;
environmental_lon[148] = -2.7272004;
environmental_2015[148] = 1;
environmental_allocated[148] = 0;
environmental_grid_ref[148] = "SJ5116";
environmental_details[148] = "Grid reference : SJ5116<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[149] = 51.5617766724;
environmental_lon[149] = 0.60989280615;
environmental_2015[149] = 0;
environmental_allocated[149] = 0;
environmental_grid_ref[149] = "TQ8188";
environmental_details[149] = "Grid reference : TQ8188<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[150] = 52.7768;
environmental_lon[150] = -2.4313387;
environmental_2015[150] = 1;
environmental_allocated[150] = 1;
environmental_grid_ref[150] = "SJ7120";
environmental_details[150] = "Grid reference : SJ7120<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[151] = 52.813448;
environmental_lon[151] = -2.1498068;
environmental_2015[151] = 1;
environmental_allocated[151] = 0;
environmental_grid_ref[151] = "SJ9024";
environmental_details[151] = "Grid reference : SJ9024<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[152] = 52.822438;
environmental_lon[152] = -2.1498377;
environmental_2015[152] = 1;
environmental_allocated[152] = 1;
environmental_grid_ref[152] = "SJ9025";
environmental_details[152] = "Grid reference : SJ9025<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[153] = 51.8334153312;
environmental_lon[153] = -2.1900832091;
environmental_2015[153] = 0;
environmental_allocated[153] = 0;
environmental_grid_ref[153] = "SO8715";
environmental_details[153] = "Grid reference : SO8715<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[154] = 53.092185;
environmental_lon[154] = -2.0761136;
environmental_2015[154] = 1;
environmental_allocated[154] = 0;
environmental_grid_ref[154] = "SJ9555";
environmental_details[154] = "Grid reference : SJ9555<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[155] = 53.163989;
environmental_lon[155] = -1.8219699;
environmental_2015[155] = 0;
environmental_allocated[155] = 1;
environmental_grid_ref[155] = "SK1263";
environmental_details[155] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[156] = 53.189517;
environmental_lon[156] = -1.3878471;
environmental_2015[156] = 0;
environmental_allocated[156] = 0;
environmental_grid_ref[156] = "SK4166";
environmental_details[156] = "Grid reference : SK4166<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[157] = 52.498828;
environmental_lon[157] = -2.1340029;
environmental_2015[157] = 1
environmental_allocated[157] = 1;
environmental_grid_ref[157] = "SO9189";
environmental_details[157] = "Grid reference : SO9189<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[158] = 53.060803;
environmental_lon[158] = -0.97186244;
environmental_2015[158] = 0;
environmental_allocated[158] = 0;
environmental_grid_ref[158] = "SK6952";
environmental_details[158] = "Grid reference : SK6952<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[159] = 52.402995;
environmental_lon[159] = -3.8829137;
environmental_2015[159] = 1;
environmental_allocated[159] = 0;
environmental_grid_ref[159] = "SN7280";
environmental_details[159] = "Grid reference : SN7280<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[160] = 52.103973;
environmental_lon[160] = -3.4030435;
environmental_2015[160] = 1;
environmental_allocated[160] = 0;
environmental_grid_ref[160] = "SO0446";
environmental_details[160] = "Grid reference : SO0446<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[161] = 52.02425;
environmental_lon[161] = -3.298522;
environmental_2015[161] = 1;
environmental_allocated[161] = 0;
environmental_grid_ref[161] = "SO1137";
environmental_details[161] = "Grid reference : SO1137<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[162] = 52.12344;
environmental_lon[162] = -3.2721894;
environmental_2015[162] = 1;
environmental_allocated[162] = 1;
environmental_grid_ref[162] = "SO1348";
environmental_details[162] = "Grid reference : SO1348<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[163] = 51.7784701383;
environmental_lon[163] = -1.47959747294;
environmental_2015[163] = 1;
environmental_allocated[163] = 1;
environmental_grid_ref[163] = "SP3609";
environmental_details[163] = "Grid reference : SP3609<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[164] = 52.5511248603;
environmental_lon[164] = -1.36726662756;
environmental_2015[164] = 1;
environmental_allocated[164] = 0;
environmental_grid_ref[164] = "SP4395";
environmental_details[164] = "Grid reference : SP4395<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[165] = 51.7059739276;
environmental_lon[165] = -1.36465409396;
environmental_2015[165] = 1;
environmental_allocated[165] = 0;
environmental_grid_ref[165] = "SP4401";
environmental_details[165] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[166] = 51.8767961879;
environmental_lon[166] = -1.3622492636;
environmental_2015[166] = 1;
environmental_allocated[166] = 0;
environmental_grid_ref[166] = "SP4420";
environmental_details[166] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[167] = 52.074543;
environmental_lon[167] = -1.3448443;
environmental_2015[167] = 1;
environmental_allocated[167] = 0;
environmental_grid_ref[167] = "SP4542";
environmental_details[167] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[168] = 52.3348711045;
environmental_lon[168] = -1.28229881236;
environmental_2015[168] = 1;
environmental_allocated[168] = 1;
environmental_grid_ref[168] = "SP4971";
environmental_details[168] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[169] = 51.9021686755;
environmental_lon[169] = -1.11479426639;
environmental_2015[169] = 1;
environmental_allocated[169] = 0;
environmental_grid_ref[169] = "SP6123";
environmental_details[169] = "Grid reference : SP6123<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[170] = 52.087643;
environmental_lon[170] = -3.2565754;
environmental_2015[170] = 1;
environmental_allocated[170] = 0;
environmental_grid_ref[170] = "SO1444";
environmental_details[170] = "Grid reference : SO1444<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[171] = 52.5666817119;
environmental_lon[171] = -1.01295144901;
environmental_2015[171] = 1;
environmental_allocated[171] = 0;
environmental_grid_ref[171] = "SP6797";
environmental_details[171] = "Grid reference : SP6797<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[172] = 52.3598154038;
environmental_lon[172] = -1.00288270671;
environmental_2015[172] = 1;
environmental_allocated[172] = 0;
environmental_grid_ref[172] = "SP6874";
environmental_details[172] = "Grid reference : SP6874<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[173] = 52.375728;
environmental_lon[173] = -3.220668;
environmental_2015[173] = 1;
environmental_allocated[173] = 0;
environmental_grid_ref[173] = "SO1776";
environmental_details[173] = "Grid reference : SO1776<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[174] = 51.837846;
environmental_lon[174] = -0.94188896;
environmental_2015[174] = 1;
environmental_allocated[174] = 0;
environmental_grid_ref[174] = "SP7316";
environmental_details[174] = "Grid reference : SP7316<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[175] = 51.4636068387;
environmental_lon[175] = 0.575488753472;
environmental_2015[175] = 0;
environmental_allocated[175] = 0;
environmental_grid_ref[175] = "TQ7977";
environmental_details[175] = "Grid reference : TQ7977<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[176] = 51.816901;
environmental_lon[176] = -0.65222472;
environmental_2015[176] = 1;
environmental_allocated[176] = 0;
environmental_grid_ref[176] = "SP9314";
environmental_details[176] = "Grid reference : SP9314<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[177] = 52.0057800461;
environmental_lon[177] = -0.661114083564;
environmental_2015[177] = 1;
environmental_allocated[177] = 0;
environmental_grid_ref[177] = "SP9235";
environmental_details[177] = "Grid reference : SP9235<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[178] = 52.1582443969;
environmental_lon[178] = -0.627305436485;
environmental_2015[178] = 1;
environmental_allocated[178] = 0;
environmental_grid_ref[178] = "SO1776";
environmental_details[178] = "Grid reference : SO1776<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[179] = 50.9428350041;
environmental_lon[179] = -4.5351391786;
environmental_2015[179] = 1;
environmental_allocated[179] = 0;
environmental_grid_ref[179] = "SS2219";
environmental_details[179] = "Grid reference : SS2219<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[180] = 50.9350725214;
environmental_lon[180] = -4.47778083555;
environmental_2015[180] = 1;
environmental_allocated[180] = 0;
environmental_grid_ref[180] = "SS2618";
environmental_details[180] = "Grid reference : SS2618<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[181] = 50.8907510541;
environmental_lon[181] = -4.44698647313;
environmental_2015[181] = 1;
environmental_allocated[181] = 0;
environmental_grid_ref[181] = "SS2813";
environmental_details[181] = "Grid reference : SS2813<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[182] = 50.7925121087;
environmental_lon[182] = -4.41346978912;
environmental_2015[182] = 1;
environmental_allocated[182] = 0;
environmental_grid_ref[182] = "SS3002";
environmental_details[182] = "Grid reference : SS3002<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[183] = 51.5795342971;
environmental_lon[183] = -4.18070033679;
environmental_2015[183] = 1;
environmental_allocated[183] = 1;
environmental_grid_ref[183] = "SS4989";
environmental_details[183] = "Grid reference : SS4989<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[184] = 51.5798014661;
environmental_lon[184] = -4.16627910224;
environmental_2015[184] = 1;
environmental_allocated[184] = 0;
environmental_grid_ref[184] = "SS5089";
environmental_details[184] = "Grid reference : SS5089<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[185] = 51.0162310722;
environmental_lon[185] = -3.99732359911;
environmental_2015[185] = 1;
environmental_allocated[185] = 0;
environmental_grid_ref[185] = "SS6026";
environmental_details[185] = "Grid reference : SS6026<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[186] = 50.9448176679;
environmental_lon[186] = -3.96578895546;
environmental_2015[186] = 1;
environmental_allocated[186] = 0;
environmental_grid_ref[186] = "SS6218";
environmental_details[186] = "Grid reference : SS6218<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[187] = 50.9277869015;
environmental_lon[187] = -3.90814819152;
environmental_2015[187] = 1;
environmental_allocated[187] = 1;
environmental_grid_ref[187] = "SS6616";
environmental_details[187] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[188] = 51.464384;
environmental_lon[188] = -3.4985023;
environmental_2015[188] = 0;
environmental_allocated[188] = 1;
environmental_grid_ref[188] = "SS9675";
environmental_details[188] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[189] = 51.0493382049;
environmental_lon[189] = -3.59925291274;
environmental_2015[189] = 0;
environmental_allocated[189] = 1;
environmental_grid_ref[189] = "SS8829";
environmental_details[189] = "Grid reference : SS8829<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[190] = 52.071666;
environmental_lon[190] = -3.0518648;
environmental_2015[190] = 1;
environmental_allocated[190] = 0;
environmental_grid_ref[190] = "SO2842";
environmental_details[190] = "Grid reference : SO2842<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[191] = 51.0512029316;
environmental_lon[191] = -3.45663883356;
environmental_2015[191] = 0;
environmental_allocated[191] = 0;
environmental_grid_ref[191] = "SS9829";
environmental_details[191] = "Grid reference : SS9829<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[192] = 51.429102739;
environmental_lon[192] = -3.43985500668;
environmental_2015[192] = 0;
environmental_allocated[192] = 0;
environmental_grid_ref[192] = "ST0071";
environmental_details[192] = "Grid reference : ST0071<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[193] = 51.4655809646;
environmental_lon[193] = -3.39781319286;
environmental_2015[193] = 0;
environmental_allocated[193] = 0;
environmental_grid_ref[193] = "ST0375";
environmental_details[193] = "Grid reference : ST0375<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[194] = 51.1692710965;
environmental_lon[194] = -3.36022721255;
environmental_2015[194] = 0;
environmental_allocated[194] = 1;
environmental_grid_ref[194] = "ST0542";
environmental_details[194] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[195] = 50.951282;
environmental_lon[195] = -3.538884;
environmental_2015[195] = 1;
environmental_allocated[195] = 0;
environmental_grid_ref[195] = "SS9218";
environmental_details[195] = "Grid reference : SS9218<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[196] = 51.5857982992;
environmental_lon[196] = -3.0839441022;
environmental_2015[196] = 0;
environmental_allocated[196] = 0;
environmental_grid_ref[196] = "ST2588";
environmental_details[196] = "Grid reference : ST2588<BR>County : Casnewydd - Newport<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[197] = 50.931254523;
environmental_lon[197] = -2.85520102831;
environmental_2015[197] = 0;
environmental_allocated[197] = 0;
environmental_grid_ref[197] = "ST4015";
environmental_details[197] = "Grid reference : ST4015<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[198] = 50.9764172466;
environmental_lon[198] = -2.82754202448;
environmental_2015[198] = 0;
environmental_allocated[198] = 0;
environmental_grid_ref[198] = "ST4220";
environmental_details[198] = "Grid reference : ST4220<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[199] = 51.3016553453;
environmental_lon[199] = -2.57517607064;
environmental_2015[199] = 0;
environmental_allocated[199] = 1;
environmental_grid_ref[199] = "ST6056";
environmental_details[199] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[200] = 51.481601;
environmental_lon[200] = -2.5630073;
environmental_2015[200] = 0;
environmental_allocated[200] = 1;
environmental_grid_ref[200] = "ST6176";
environmental_details[200] = "Grid reference : ST6176<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[201] = 51.068317895;
environmental_lon[201] = -2.47237408628;
environmental_2015[201] = 0;
environmental_allocated[201] = 0;
environmental_grid_ref[201] = "ST6730";
environmental_details[201] = "Grid reference : ST6730<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[202] = 52.035839;
environmental_lon[202] = -3.0364452;
environmental_2015[202] = 1;
environmental_allocated[202] = 0;
environmental_grid_ref[202] = "SO2938";
environmental_details[202] = "Grid reference : SO2938<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[203] = 50.9522991951;
environmental_lon[203] = -2.12952067536;
environmental_2015[203] = 1;
environmental_allocated[203] = 0;
environmental_grid_ref[203] = "ST9117";
environmental_details[203] = "Grid reference : ST9117<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[204] = 51.4559060421;
environmental_lon[204] = -2.07337052562;
environmental_2015[204] = 1;
environmental_allocated[204] = 0;
environmental_grid_ref[204] = "ST9573";
environmental_details[204] = "Grid reference : ST9573<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[205] = 52.183371;
environmental_lon[205] = -2.4548225;
environmental_2015[205] = 1;
environmental_allocated[205] = 1;
environmental_grid_ref[205] = "SO6954";
environmental_details[205] = "Grid reference : SO6954<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[206] = 51.2940624547;
environmental_lon[206] = -1.9440350865;
environmental_2015[206] = 1;
environmental_allocated[206] = 0;
environmental_grid_ref[206] = "SU0455";
environmental_details[206] = "Grid reference : SU0455<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[207] = 51.014761;
environmental_lon[207] = -3.4982159;
environmental_2015[207] = 1;
environmental_allocated[207] = 0;
environmental_grid_ref[207] = "SS9525";
environmental_details[207] = "Grid reference : SS9525<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[208] = 51.6263428283;
environmental_lon[208] = -1.68359109016;
environmental_2015[208] = 1;
environmental_allocated[208] = 0;
environmental_grid_ref[208] = "SU2292";
environmental_details[208] = "Grid reference : SU2292<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[209] = 50.9609082742;
environmental_lon[209] = -1.67389296787;
environmental_2015[209] = 1;
environmental_allocated[209] = 1;
environmental_grid_ref[209] = "SU2318";
environmental_details[209] = "Grid reference : SU2318<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[210] = 50.9607812033;
environmental_lon[210] = -1.63117650697;
environmental_2015[210] = 1;
environmental_allocated[210] = 1;
environmental_grid_ref[210] = "SU2618";
environmental_details[210] = "Grid reference : SU2618<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[211] = 52.082406;
environmental_lon[211] = -2.8332165;
environmental_2015[211] = 1;
environmental_allocated[211] = 0;
environmental_grid_ref[211] = "SO4343";
environmental_details[211] = "Grid reference : SO4343<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[212] = 51.6515283906;
environmental_lon[212] = -1.27868756591;
environmental_2015[212] = 1;
environmental_allocated[212] = 0;
environmental_grid_ref[212] = "SU5095";
environmental_details[212] = "Grid reference : SU5095<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[213] = 50.8871802393;
environmental_lon[213] = -1.27633923263;
environmental_2015[213] = 1;
environmental_allocated[213] = 1;
environmental_grid_ref[213] = "SU5110";
environmental_details[213] = "Grid reference : SU5110<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[214] = 51.3536467328;
environmental_lon[214] = -1.11104543498;
environmental_2015[214] = 1;
environmental_allocated[214] = 0;
environmental_grid_ref[214] = "SU6262";
environmental_details[214] = "Grid reference : SU6262<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[215] = 51.1553990917;
environmental_lon[215] = -1.05766340784;
environmental_2015[215] = 1;
environmental_allocated[215] = 1;
environmental_grid_ref[215] = "SU6640";
environmental_details[215] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[216] = 52.073519;
environmental_lon[216] = -2.8184606;
environmental_2015[216] = 1;
environmental_allocated[216] = 0;
environmental_grid_ref[216] = "SO4442";
environmental_details[216] = "Grid reference : SO4442<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[217] = 52.289467;
environmental_lon[217] = -2.7931135;
environmental_2015[217] = 1;
environmental_allocated[217] = 1;
environmental_grid_ref[217] = "SO4666";
environmental_details[217] = "Grid reference : SO4666<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[218] = 52.192244;
environmental_lon[218] = -2.484171;
environmental_2015[218] = 1;
environmental_allocated[218] = 1;
environmental_grid_ref[218] = "SO6755 ";
environmental_details[218] = "Grid reference : SO6755<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[219] = 51.0341236223;
environmental_lon[219] = -0.617998869207;
environmental_2015[219] = 1;
environmental_allocated[219] = 0;
environmental_grid_ref[219] = "SU9727";
environmental_details[219] = "Grid reference : SU9727<BR>County : West Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[220] = 50.242064551;
environmental_lon[220] = -5.22716181437;
environmental_2015[220] = 1;
environmental_allocated[220] = 0;
environmental_grid_ref[220] = "SW7043";
environmental_details[220] = "Grid reference : SW7043<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[221] = 50.4229672212;
environmental_lon[221] = -4.84518619362;
environmental_2015[221] = 1;
environmental_allocated[221] = 0;
environmental_grid_ref[221] = "SW9862";
environmental_details[221] = "Grid reference : SW9862<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[222] = 50.5726288415;
environmental_lon[222] = -4.59995147754;
environmental_2015[222] = 1;
environmental_allocated[222] = 0;
environmental_grid_ref[222] = "SX1678";
environmental_details[222] = "Grid reference : SX1678<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[223] = 50.6469713268;
environmental_lon[223] = -4.49088091305;
environmental_2015[223] = 1;
environmental_allocated[223] = 0;
environmental_grid_ref[223] = "SX2486";
environmental_details[223] = "Grid reference : SX2486<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[224] = 50.4105656089;
environmental_lon[224] = -4.16879292343;
environmental_2015[224] = 1;
environmental_allocated[224] = 0;
environmental_grid_ref[224] = "SX4659";
environmental_details[224] = "Grid reference : SX4659<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[225] = 50.455655881;
environmental_lon[225] = -3.60732155606;
environmental_2015[225] = 1;
environmental_allocated[225] = 0;
environmental_grid_ref[225] = "SX8663";
environmental_details[225] = "Grid reference : SX8663<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[226] = 50.580982;
environmental_lon[226] = -3.6539045;
environmental_2015[226] = 1;
environmental_allocated[226] = 0;
environmental_grid_ref[226] = "SX8377";
environmental_details[226] = "Grid reference : SX8377<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[227] = 50.5097879953;
environmental_lon[227] = -3.59505508137;
environmental_2015[227] = 1;
environmental_allocated[227] = 0;
environmental_grid_ref[227] = "SX8769";
environmental_details[227] = "Grid reference : SX8769<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[228] = 50.6855036745;
environmental_lon[228] = -3.19047034535;
environmental_2015[228] = 1;
environmental_allocated[228] = 0;
environmental_grid_ref[228] = "SY1688";
environmental_details[228] = "Grid reference : SY1688<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[229] = 50.7165708365;
environmental_lon[229] = -2.68130568265;
environmental_2015[229] = 1;
environmental_allocated[229] = 0;
environmental_grid_ref[229] = "SY5291";
environmental_details[229] = "Grid reference : SY5291<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[230] = 50.779579;
environmental_lon[230] = -2.6821859;
environmental_2015[230] = 1;
environmental_allocated[230] = 1;
environmental_grid_ref[230] = "SY5298";
environmental_details[230] = "Grid reference : SY5298<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[231] = 50.726987;
environmental_lon[231] = -2.3838955;
environmental_2015[231] = 1;
environmental_allocated[231] = 1;
environmental_grid_ref[231] = "SY7392";
environmental_details[231] = "Grid reference : SY7392<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[232] = 52.507625;
environmental_lon[232] = -2.2518965;
environmental_2015[232] = 1;
environmental_allocated[232] = 1;
environmental_grid_ref[232] = "SO8390";
environmental_details[232] = "Grid reference : SO8390<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[233] = 52.121255;
environmental_lon[233] = -2.1182598;
environmental_2015[233] = 1;
environmental_allocated[233] = 1;
environmental_grid_ref[233] = "SO9247";
environmental_details[233] = "Grid reference : SO9247<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[234] = 54.0083437589;
environmental_lon[234] = -0.475581682379;
environmental_2015[234] = 1;
environmental_allocated[234] = 0;
environmental_grid_ref[234] = "TA0058";
environmental_details[234] = "Grid reference : TA0058<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[235] = 54.3677174898;
environmental_lon[235] = -0.462299842079;
environmental_2015[235] = 1;
environmental_allocated[235] = 1;
environmental_grid_ref[235] = "TA0098";
environmental_details[235] = "Grid reference : TA0098<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[236] = 54.2054089071;
environmental_lon[236] = -0.4223360298;
environmental_2015[236] = 1;
environmental_allocated[236] = 1;
environmental_grid_ref[236] = "TA0380";
environmental_details[236] = "Grid reference : TA0380<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[237] = 53.76177;
environmental_lon[237] = -0.19631373;
environmental_2015[237] = 1;
environmental_allocated[237] = 0;
environmental_grid_ref[237] = "TA1931";
environmental_details[237] = "Grid reference : TA1931<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[238] = 54.139066;
environmental_lon[238] = -0.17995673;
environmental_2015[238] = 1;
environmental_allocated[238] = 0;
environmental_grid_ref[238] = "TA1973";
environmental_details[238] = "Grid reference : TA1973<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[239] = 53.4801633762;
environmental_lon[239] = -0.0123292552832;
environmental_2015[239] = 0;
environmental_allocated[239] = 1;
environmental_grid_ref[239] = "TA3200";
environmental_details[239] = "Grid reference : TA3200<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[240] = 52.022373;
environmental_lon[240] = -2.1034249;
environmental_2015[240] = 1;
environmental_allocated[240] = 1;
environmental_grid_ref[240] = "SO9336";
environmental_details[240] = "Grid reference : SO9336<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[241] = 52.821866975;
environmental_lon[241] = -0.487755702953;
environmental_2015[241] = 0;
environmental_allocated[241] = 1;
environmental_grid_ref[241] = "TF0226";
environmental_details[241] = "Grid reference : TF0226<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[242] = 52.443786;
environmental_lon[242] = -1.4717925;
environmental_2015[242] = 1;
environmental_allocated[242] = 0;
environmental_grid_ref[242] = "SP3683";
environmental_details[242] = "Grid reference : SP3683<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[243] = 52.5954381211;
environmental_lon[243] = -0.36268465052;
environmental_2015[243] = 0;
environmental_allocated[243] = 1;
environmental_grid_ref[243] = "TF1101";
environmental_details[243] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[244] = 52.5928572494;
environmental_lon[244] = -0.185613402656;
environmental_2015[244] = 0;
environmental_allocated[244] = 0;
environmental_grid_ref[244] = "TF2301";
environmental_details[244] = "Grid reference : TF2301<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[245] = 52.6611329763;
environmental_lon[245] = 0.0390244736447;
environmental_2015[245] = 0;
environmental_allocated[245] = 0;
environmental_grid_ref[245] = "TF3809";
environmental_details[245] = "Grid reference : TF3809<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[246] = 52.992779;
environmental_lon[246] = 0.099284333;
environmental_2015[246] = 0;
environmental_allocated[246] = 0;
environmental_grid_ref[246] = "TF4146";
environmental_details[246] = "Grid reference : TF4146<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[247] = 53.1081938474;
environmental_lon[247] = 0.179642753153;
environmental_2015[247] = 0;
environmental_allocated[247] = 0;
environmental_grid_ref[247] = "TF4659";
environmental_details[247] = "Grid reference : TF4659<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[248] = 53.2962720823;
environmental_lon[248] = 0.219223656988;
environmental_2015[248] = 0;
environmental_allocated[248] = 0;
environmental_grid_ref[248] = "TF4880";
environmental_details[248] = "Grid reference : TF4880<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[249] = 52.148241;
environmental_lon[249] = -2.103717;
environmental_2015[249] = 1;
environmental_allocated[249] = 1;
environmental_grid_ref[249] = "SO9350";
environmental_details[249] = "Grid reference : SO9350<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[250] = 52.7604514796;
environmental_lon[250] = 0.488319169935;
environmental_2015[250] = 0;
environmental_allocated[250] = 1;
environmental_grid_ref[250] = "TF6821";
environmental_details[250] = "Grid reference : TF6821<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[251] = 52.6418044415;
environmental_lon[251] = 0.570271303613;
environmental_2015[251] = 0;
environmental_allocated[251] = 0;
environmental_grid_ref[251] = "TF7408";
environmental_details[251] = "Grid reference : TF7408<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[252] = 52.417948;
environmental_lon[252] = -2.1043502;
environmental_2015[252] = 1;
environmental_allocated[252] = 1;
environmental_grid_ref[252] = "SO9380";
environmental_details[252] = "Grid reference : SO9380<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[253] = 52.112301;
environmental_lon[253] = -2.074428;
environmental_2015[253] = 1;
environmental_allocated[253] = 1;
environmental_grid_ref[253] = "SO9546";
environmental_details[253] = "Grid reference : SO9546<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[254] = 52.570799;
environmental_lon[254] = -2.0752046;
environmental_2015[254] = 1;
environmental_allocated[254] = 0;
environmental_grid_ref[254] = "SO9597";
environmental_details[254] = "Grid reference : SO9597<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[255] = 52.830318926;
environmental_lon[255] = 1.30893742424;
environmental_2015[255] = 0;
environmental_allocated[255] = 0;
environmental_grid_ref[255] = "TG2331";
environmental_details[255] = "Grid reference : TG2331<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[256] = 52.0124633685;
environmental_lon[256] = -0.471484433724;
environmental_2015[256] = 1;
environmental_allocated[256] = 1;
environmental_grid_ref[256] = "TL0536";
environmental_details[256] = "Grid reference : TL0536<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[257] = 52.5515021065;
environmental_lon[257] = -0.438069881667;
environmental_2015[257] = 1;
environmental_allocated[257] = 1;
environmental_grid_ref[257] = "TL0696";
environmental_details[257] = "Grid reference : TL0696<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[258] = 52.2182007512;
environmental_lon[258] = -0.391234905322;
environmental_2015[258] = 1;
environmental_allocated[258] = 1;
environmental_grid_ref[258] = "TL1059";
environmental_details[258] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[259] = 51.137688102;
environmental_lon[259] = 0.242788509947;
environmental_2015[259] = 0;
environmental_allocated[259] = 0;
environmental_grid_ref[259] = "TQ5740";
environmental_details[259] = "Grid reference : TQ5740<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[260] = 51.919558017;
environmental_lon[260] = -0.256515805988;
environmental_2015[260] = 1;
environmental_allocated[260] = 1;
environmental_grid_ref[260] = "TL2026";
environmental_details[260] = "Grid reference : TL2026<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[261] = 52.4115277069;
environmental_lon[261] = -0.0901408642007;
environmental_2015[261] = 0;
environmental_allocated[261] = 1;
environmental_grid_ref[261] = "TL3081";
environmental_details[261] = "Grid reference : TL3081<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[262] = 52.1864168759;
environmental_lon[262] = -0.0705452651306;
environmental_2015[262] = 0;
environmental_allocated[262] = 1;
environmental_grid_ref[262] = "TL3256";
environmental_details[262] = "Grid reference : TL3256<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[263] = 51.7087209558;
environmental_lon[263] = -0.00409556332088;
environmental_2015[263] = 0;
environmental_allocated[263] = 0;
environmental_grid_ref[263] = "TL3803";
environmental_details[263] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[264] = 51.9241285923;
environmental_lon[264] = 0.0199916865488;
environmental_2015[264] = 1;
environmental_allocated[264] = 1;
environmental_grid_ref[264] = "TL3927";
environmental_details[264] = "Grid reference : TL3927<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[265] = 52.570799;
environmental_lon[265] = -2.0752046;
environmental_2015[265] = 1;
environmental_allocated[265] = 0;
environmental_grid_ref[265] = "SO9597";
environmental_details[265] = "Grid reference : SO9597<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[266] = 52.0132229043;
environmental_lon[266] = 0.0677217348969;
environmental_2015[266] = 0;
environmental_allocated[266] = 0;
environmental_grid_ref[266] = "TL4237";
environmental_details[266] = "Grid reference : TL4237<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[267] = 51.797639;
environmental_lon[267] = -2.0449054;
environmental_2015[267] = 1;
environmental_allocated[267] = 0;
environmental_grid_ref[267] = "SO9711";
environmental_details[267] = "Grid reference : SO9711<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[268] = 52.498895;
environmental_lon[268] = -2.0456206;
environmental_2015[268] = 1;
environmental_allocated[268] = 0;
environmental_grid_ref[268] = "SO9789";
environmental_details[268] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[269] = 51.063313;
environmental_lon[269] = -3.1858206;
environmental_2015[269] = 0;
environmental_allocated[269] = 0;
environmental_grid_ref[269] = "ST1730";
environmental_details[269] = "Grid reference : ST1730<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[270] = 52.193196;
environmental_lon[270] = -1.8990136;
environmental_2015[270] = 1;
environmental_allocated[270] = 0;
environmental_grid_ref[270] = "SP0755";
environmental_details[270] = "Grid reference : SP0755<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[271] = 52.579485;
environmental_lon[271] = -1.7210414;
environmental_2015[271] = 1;
environmental_allocated[271] = 0;
environmental_grid_ref[271] = "SP1998";
environmental_details[271] = "Grid reference : SP1998<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[272] = 52.1728537981;
environmental_lon[272] = 0.63089996377;
environmental_2015[272] = 0;
environmental_allocated[272] = 0;
environmental_grid_ref[272] = "TL8056";
environmental_details[272] = "Grid reference : TL8056<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[273] = 52.56147;
environmental_lon[273] = -1.7064042;
environmental_2015[273] = 1;
environmental_allocated[273] = 0;
environmental_grid_ref[273] = "SP2096";
environmental_details[273] = "Grid reference : SP2096<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[274] = 51.889037644;
environmental_lon[274] = 0.846835219037;
environmental_2015[274] = 0;
environmental_allocated[274] = 0;
environmental_grid_ref[274] = "TL9625";
environmental_details[274] = "Grid reference : TL9625<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[275] = 52.1135305256;
environmental_lon[275] = 0.861123889883;
environmental_2015[275] = 0;
environmental_allocated[275] = 0;
environmental_grid_ref[275] = "TL9650";
environmental_details[275] = "Grid reference : TL9650<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[276] = 52.0323603418;
environmental_lon[276] = 0.870517197794;
environmental_2015[276] = 0;
environmental_allocated[276] = 0;
environmental_grid_ref[276] = "TL9741";
environmental_details[276] = "Grid reference : TL9741<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[277] = 52.0306934887;
environmental_lon[277] = 1.27869163943;
environmental_2015[277] = 0;
environmental_allocated[277] = 0;
environmental_grid_ref[277] = "TM2542";
environmental_details[277] = "Grid reference : TM2542<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[278] = 52.5226842097;
environmental_lon[278] = 1.37421962928;
environmental_2015[278] = 0;
environmental_allocated[278] = 0;
environmental_grid_ref[278] = "TM2997";
environmental_details[278] = "Grid reference : TM2997<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[279] = 51.704751;
environmental_lon[279] = -1.1620694;
environmental_2015[279] = 1;
environmental_allocated[279] = 0;
environmental_grid_ref[279] = "SP5801";
environmental_details[279] = "Grid reference : SP5801<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[280] = 52.14785253;
environmental_lon[280] = 1.57972082998;
environmental_2015[280] = 0;
environmental_allocated[280] = 1;
environmental_grid_ref[280] = "TM4556";
environmental_details[280] = "Grid reference : TM4556<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[281] = 51.4647362637;
environmental_lon[281] = -0.533046978082;
environmental_2015[281] = 1;
environmental_allocated[281] = 0;
environmental_grid_ref[281] = "TQ0275";
environmental_details[281] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[282] = 51.0948980017;
environmental_lon[282] = -0.444813321115;
environmental_2015[282] = 1;
environmental_allocated[282] = 0;
environmental_grid_ref[282] = "TQ0934";
environmental_details[282] = "Grid reference : TQ0934<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[283] = 51.3194249385;
environmental_lon[283] = -0.422880262604;
environmental_2015[283] = 1;
environmental_allocated[283] = 0;
environmental_grid_ref[283] = "TQ1059";
environmental_details[283] = "Grid reference : TQ1059<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[284] = 51.0569583235;
environmental_lon[284] = -0.303387465745;
environmental_2015[284] = 1;
environmental_allocated[284] = 1;
environmental_grid_ref[284] = "TQ1930";
environmental_details[284] = "Grid reference : TQ1930<BR>County : West Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[285] = 52.275629;
environmental_lon[285] = -0.66766913;
environmental_2015[285] = 1;
environmental_allocated[285] = 1;
environmental_grid_ref[285] = "SP9165";
environmental_details[285] = "Grid reference : SP9165<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[286] = 50.902229861;
environmental_lon[286] = -0.181015502778;
environmental_2015[286] = 1;
environmental_allocated[286] = 1;
environmental_grid_ref[286] = "TQ2813";
environmental_details[286] = "Grid reference : TQ2813<BR>County : West Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[287] = 52.005656;
environmental_lon[287] = -0.64656247;
environmental_2015[287] = 1;
environmental_allocated[287] = 0;
environmental_grid_ref[287] = "SP9335";
environmental_details[287] = "Grid reference : SP9335<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[288] = 50.8388677028;
environmental_lon[288] = -0.1550738877;
environmental_2015[288] = 1;
environmental_allocated[288] = 0;
environmental_grid_ref[288] = "TQ3006";
environmental_details[288] = "Grid reference : TQ3006<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[289] = 50.9516280875;
environmental_lon[289] = 0.0914340943444;
environmental_2015[289] = 1;
environmental_allocated[289] = 0;
environmental_grid_ref[289] = "TQ4719";
environmental_details[289] = "Grid reference : TQ4719<BR>County : East Sussex<B><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[290] = 51.5978237095;
environmental_lon[290] = 0.164312224149;
environmental_2015[290] = 0;
environmental_allocated[290] = 1;
environmental_grid_ref[290] = "TQ5091";
environmental_details[290] = "Grid reference : TQ5091<BR>County : Greater London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[291] = 50.8414340093;
environmental_lon[291] = 0.21434465248;
environmental_2015[291] = 1;
environmental_allocated[291] = 0;
environmental_grid_ref[291] = "TQ5607";
environmental_details[291] = "Grid reference : TQ5607<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[292] = 51.069203;
environmental_lon[292] = -2.1726408;
environmental_2015[292] = 1;
environmental_allocated[292] = 0;
environmental_grid_ref[292] = "ST8830";
environmental_details[292] = "Grid reference : ST8830<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[293] = 51.644795;
environmental_lon[293] = -1.9724933;
environmental_2015[293] = 0;
environmental_allocated[293] = 0;
environmental_grid_ref[293] = "SU0294";
environmental_details[293] = "Grid reference : SU0294<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[294] = 50.889267;
environmental_lon[294] = -1.7738989;
environmental_2015[294] = 1;
environmental_allocated[294] = 0;
environmental_grid_ref[294] = "SU1610";
environmental_details[294] = "Grid reference : SU1610<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[295] = 50.925208;
environmental_lon[295] = -1.759497;
environmental_2015[295] = 1;
environmental_allocated[295] = 0;
environmental_grid_ref[295] = "SU1714";
environmental_details[295] = "Grid reference : SU1714<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[296] = 50.835223;
environmental_lon[296] = -1.7315581;
environmental_2015[296] = 1;
environmental_allocated[296] = 0;
environmental_grid_ref[296] = "SU1904";
environmental_details[296] = "Grid reference : SU1904<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[297] = 50.871192;
environmental_lon[297] = -1.7313518;
environmental_2015[297] = 1;
environmental_allocated[297] = 0;
environmental_grid_ref[297] = "SU1908";
environmental_details[297] = "Grid reference : SU1908<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[298] = 50.808177;
environmental_lon[298] = -1.7033283;
environmental_2015[298] = 1;
environmental_allocated[298] = 0;
environmental_grid_ref[298] = "SU2101";
environmental_details[298] = "Grid reference : SU2101<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[299] = 50.817169;
environmental_lon[299] = -1.7032713;
environmental_2015[299] = 1;
environmental_allocated[299] = 0;
environmental_grid_ref[299] = "SU2102";
environmental_details[299] = "Grid reference : SU2102<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[300] = 50.835154;
environmental_lon[300] = -1.7031574;
environmental_2015[300] = 1;
environmental_allocated[300] = 0;
environmental_grid_ref[300] = "SU2104";
environmental_details[300] = "Grid reference : SU2104<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[301] = 50.961046;
environmental_lon[301] = -1.7023567;
environmental_2015[301] = 1;
environmental_allocated[301] = 0;
environmental_grid_ref[301] = "SU2118";
environmental_details[301] = "Grid reference : SU2118<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[302] = 50.943024;
environmental_lon[302] = -1.6882383;
environmental_2015[302] = 1;
environmental_allocated[302] = 0;
environmental_grid_ref[302] = "SU2216";
environmental_details[302] = "Grid reference : SU2216<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[303] = 50.88004;
environmental_lon[303] = -1.6744442;
environmental_2015[303] = 1;
environmental_allocated[303] = 0;
environmental_grid_ref[303] = "SU2309";
environmental_details[303] = "Grid reference : SU2309<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[304] = 50.898024;
environmental_lon[304] = -1.6743189;
environmental_2015[304] = 1;
environmental_allocated[304] = 0;
environmental_grid_ref[304] = "SU2311";
environmental_details[304] = "Grid reference : SU2311<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[305] = 50.907017;
environmental_lon[305] = -1.6742562;
environmental_2015[305] = 1;
environmental_allocated[305] = 0;
environmental_grid_ref[305] = "SU2312";
environmental_details[305] = "Grid reference : SU2312<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[306] = 50.808061;
environmental_lon[306] = -1.660752;
environmental_2015[306] = 1;
environmental_allocated[306] = 0;
environmental_grid_ref[306] = "SU2401";
environmental_details[306] = "Grid reference : SU2401<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[307] = 50.817053;
environmental_lon[307] = -1.6606869;
environmental_2015[307] = 1;
environmental_allocated[307] = 0;
environmental_grid_ref[307] = "SU2402";
environmental_details[307] = "Grid reference : SU2402<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[308] = 50.808019;
environmental_lon[308] = -1.64656;
environmental_2015[308] = 1;
environmental_allocated[308] = 0;
environmental_grid_ref[308] = "SU2501";
environmental_details[308] = "Grid reference : SU2501<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[309] = 50.807882;
environmental_lon[309] = -1.6039841;
environmental_2015[309] = 1;
environmental_allocated[309] = 0;
environmental_grid_ref[309] = "SU2801";
environmental_details[309] = "Grid reference : SU2801<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[310] = 50.870728;
environmental_lon[310] = -1.5750294;
environmental_2015[310] = 1;
environmental_allocated[310] = 0;
environmental_grid_ref[310] = "SU3008";
environmental_details[310] = "Grid reference : SU3008<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[311] = 50.897652;
environmental_lon[311] = -1.5605649;
environmental_2015[311] = 1;
environmental_allocated[311] = 0;
environmental_grid_ref[311] = "SU3111";
environmental_details[311] = "Grid reference : SU3111<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[312] = 50.816612;
environmental_lon[312] = -1.5329355;
environmental_2015[312] = 1;
environmental_allocated[312] = 0;
environmental_grid_ref[312] = "SU3302";
environmental_details[312] = "Grid reference : SU3302<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[313] = 50.807442;
environmental_lon[313] = -1.4904502;
environmental_2015[313] = 1;
environmental_allocated[313] = 0;
environmental_grid_ref[313] = "SU3601";
environmental_details[313] = "Grid reference : SU3601<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[314] = 50.843148;
environmental_lon[314] = -1.4332494;
environmental_2015[314] = 1;
environmental_allocated[314] = 0;
environmental_grid_ref[314] = "SU4005";
environmental_details[314] = "Grid reference : SU4005<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[315] = 51.022916;
environmental_lon[315] = -1.4168034;
environmental_2015[315] = 1;
environmental_allocated[315] = 0;
environmental_grid_ref[315] = "SU4125";
environmental_details[315] = "Grid reference : SU4125<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[316] = 50.843007;
environmental_lon[316] = -1.404845;
environmental_2015[316] = 1;
environmental_allocated[316] = 0;
environmental_grid_ref[316] = "SU4205";
environmental_details[316] = "Grid reference : SU2402<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[317] = 50.912702;
environmental_lon[317] = -1.0625724;
environmental_2015[317] = 1;
environmental_allocated[317] = 0;
environmental_grid_ref[317] = "SU6613";
environmental_details[317] = "Grid reference : SU6613<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[318] = 51.281211;
environmental_lon[318] = -1.0407546;
environmental_2015[318] = 1;
environmental_allocated[318] = 0;
environmental_grid_ref[318] = "SU6754";
environmental_details[318] = "Grid reference : SU6754<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[319] = 51.413807;
environmental_lon[319] = -0.79352925;
environmental_2015[319] = 1;
environmental_allocated[319] = 0;
environmental_grid_ref[319] = "SU8469";
environmental_details[319] = "Grid reference : SU8469<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[320] = 51.314622;
environmental_lon[320] = -0.76743483;
environmental_2015[320] = 1;
environmental_allocated[320] = 0;
environmental_grid_ref[320] = "SU8658";
environmental_details[320] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[321] = 50.836244;
environmental_lon[321] = -0.60965864;
environmental_2015[321] = 1;
environmental_allocated[321] = 1;
environmental_grid_ref[321] = "SU9805";
environmental_details[321] = "Grid reference : SU9805<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[322] = 50.588947;
environmental_lon[322] = -3.7248212;
environmental_2015[322] = 1;
environmental_allocated[322] = 0;
environmental_grid_ref[322] = "SX7878";
environmental_details[322] = "Grid reference : SX7878<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[323] = 50.597936;
environmental_lon[323] = -3.7251498;
environmental_2015[323] = 1;
environmental_allocated[323] = 0;
environmental_grid_ref[323] = "SX7879";
environmental_details[323] = "Grid reference : SX7879<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[324] = 50.781124;
environmental_lon[324] = -1.675131;
environmental_2015[324] = 1;
environmental_allocated[324] = 0;
environmental_grid_ref[324] = "SZ2398";
environmental_details[324] = "Grid reference : SZ2398<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[325] = 50.789897;
environmental_lon[325] = -1.604136;
environmental_2015[325] = 1;
environmental_allocated[325] = 0;
environmental_grid_ref[325] = "SZ2899";
environmental_details[325] = "Grid reference : SZ2899<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[326] = 50.780856;
environmental_lon[326] = -1.5900281;
environmental_2015[326] = 1;
environmental_allocated[326] = 0;
environmental_grid_ref[326] = "SZ2998";
environmental_details[326] = "Grid reference : SZ2998<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[327] = 50.789798;
environmental_lon[327] = -1.5757631;
environmental_2015[327] = 1;
environmental_allocated[327] = 0;
environmental_grid_ref[327] = "SZ3099";
environmental_details[327] = "Grid reference : SZ3099<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[328] = 50.663852;
environmental_lon[328] = -1.5627494;
environmental_2015[328] = 1;
environmental_allocated[328] = 1;
environmental_grid_ref[328] = "SZ3185";
environmental_details[328] = "Grid reference : SZ3185<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[329] = 50.780643;
environmental_lon[329] = -1.5332937;
environmental_2015[329] = 1;
environmental_allocated[329] = 0;
environmental_grid_ref[329] = "SZ3398";
environmental_details[329] = "Grid reference : SZ3398<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[330] = 50.780526;
environmental_lon[330] = -1.5049267;
environmental_2015[330] = 1;
environmental_allocated[330] = 0;
environmental_grid_ref[330] = "SZ3598";
environmental_details[330] = "Grid reference : SZ3598<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[331] = 50.789518;
environmental_lon[331] = -1.5048318;
environmental_2015[331] = 1;
environmental_allocated[331] = 0;
environmental_grid_ref[331] = "SZ3599";
environmental_details[331] = "Grid reference : SZ3599<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[332] = 50.699534;
environmental_lon[332] = -1.4916198;
environmental_2015[332] = 1;
environmental_allocated[332] = 0;
environmental_grid_ref[332] = "SZ3689";
environmental_details[332] = "Grid reference : SZ3689<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[333] = 50.771473;
environmental_lon[333] = -1.4908409;
environmental_2015[333] = 1;
environmental_allocated[333] = 0;
environmental_grid_ref[333] = "SZ3697";
environmental_details[333] = "Grid reference : SZ3697<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[334] = 50.780465;
environmental_lon[334] = -1.4907433;
environmental_2015[334] = 1;
environmental_allocated[334] = 0;
environmental_grid_ref[334] = "SZ3698";
environmental_details[334] = "Grid reference : SZ3698<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[335] = 50.69867;
environmental_lon[335] = -1.3217163;
environmental_2015[335] = 1;
environmental_allocated[335] = 0;
environmental_grid_ref[335] = "SZ4889";
environmental_details[335] = "Grid reference : SZ4889<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[336] = 53.333101;
environmental_lon[336] = -0.39466768;
environmental_2015[336] = 0;
environmental_allocated[336] = 0;
environmental_grid_ref[336] = "TF0783";
environmental_details[336] = "Grid reference : TF0783<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[337] = 53.332898;
environmental_lon[337] = -0.37965746;
environmental_2015[337] = 0;
environmental_allocated[337] = 1;
environmental_grid_ref[337] = "TF0883";
environmental_details[337] = "Grid reference : TF0883<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[338] = 53.368007;
environmental_lon[338] = -0.31820437;
environmental_2015[338] = 0;
environmental_allocated[338] = 0;
environmental_grid_ref[338] = "TF1287";
environmental_details[338] = "Grid reference : TF1287<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[339] = 52.599147;
environmental_lon[339] = 0.86309696;
environmental_2015[339] = 0;
environmental_allocated[339] = 0;
environmental_grid_ref[339] = "TF9404";
environmental_details[339] = "Grid reference : TF9404<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[340] = 52.75142;
environmental_lon[340] = 0.88789698;
environmental_2015[340] = 0;
environmental_allocated[340] = 1;
environmental_grid_ref[340] = "TF9521";
environmental_details[340] = "Grid reference : TF9521<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[341] = 52.718097;
environmental_lon[341] = 1.137457;
environmental_2015[341] = 0;
environmental_allocated[341] = 1;
environmental_grid_ref[341] = "TG1218";
environmental_details[341] = "Grid reference : TG1218<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[342] = 52.569311;
environmental_lon[342] = -0.42270311;
environmental_2015[342] = 1;
environmental_allocated[342] = 1;
environmental_grid_ref[342] = "TL0798";
environmental_details[342] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[343] = 51.73088;
environmental_lon[343] = -0.26380698;
environmental_2015[343] = 1;
environmental_allocated[343] = 0;
environmental_grid_ref[343] = "TL2005";
environmental_details[343] = "Grid reference : TL2005<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[344] = 52.296979;
environmental_lon[344] = 0.28620994;
environmental_2015[344] = 0;
environmental_allocated[344] = 1;
environmental_grid_ref[344] = "TL5669";
environmental_details[344] = "Grid reference : TL5669<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[345] = 51.7065;
environmental_lon[345] = 0.57475416;
environmental_2015[345] = 0;
environmental_allocated[345] = 0;
environmental_grid_ref[345] = "TL7804";
environmental_details[345] = "Grid reference : TL7804<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[346] = 52.298627;
environmental_lon[346] = 0.63830969;
environmental_2015[346] = 0;
environmental_allocated[346] = 0;
environmental_grid_ref[346] = "TL8070";
environmental_details[346] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[347] = 51.894154;
environmental_lon[347] = 0.62907753;
environmental_2015[347] = 0;
environmental_allocated[347] = 1;
environmental_grid_ref[347] = "TL8125";
environmental_details[347] = "Grid reference : TL8125<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[348] = 51.85477;
environmental_lon[348] = 1.1351034;
environmental_2015[348] = 0;
environmental_allocated[348] = 1;
environmental_grid_ref[348] = "TM1622";
environmental_details[348] = "Grid reference : TM1622<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[349] = 52.430003;
environmental_lon[349] = 1.4700704;
environmental_2015[349] = 0;
environmental_allocated[349] = 0;
environmental_grid_ref[349] = "TM3687";
environmental_details[349] = "Grid reference : TM3687<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[350] = 50.967138;
environmental_lon[350] = -0.3066776;
environmental_2015[350] = 1;
environmental_allocated[350] = 1;
environmental_grid_ref[350] = "TQ1920";
environmental_details[350] = "Grid reference : TQ1920<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[351] = 51.424671;
environmental_lon[351] = -0.23228506;
environmental_2015[351] = 0;
environmental_allocated[351] = 0;
environmental_grid_ref[351] = "TQ2371";
environmental_details[351] = "Grid reference : TQ2371<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[352] = 51.55814;
environmental_lon[352] = -0.14055801;
environmental_2015[352] = 0;
environmental_allocated[352] = 1;
environmental_grid_ref[352] = "TQ2986";
environmental_details[352] = "Grid reference : TQ2986<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[353] = 51.594842;
environmental_lon[353] = 0.32296727;
environmental_2015[353] = 0;
environmental_allocated[353] = 0;
environmental_grid_ref[353] = "TQ6191";
environmental_details[353] = "Grid reference : TQ6191<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[354] = 51.546374;
environmental_lon[354] = 0.49358131;
environmental_2015[354] = 0;
environmental_allocated[354] = 1;
environmental_grid_ref[354] = "TQ7386";
environmental_details[354] = "Grid reference : TQ7386<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[355] = 51.456238;
environmental_lon[355] = 0.50305999;
environmental_2015[355] = 0;
environmental_allocated[355] = 1;
environmental_grid_ref[355] = "TQ7476";
environmental_details[355] = "Grid reference : TQ7476<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"

environmental_lat[356] = 51.402033;
environmental_lon[356] = 0.51447684;
environmental_2015[356] = 0;
environmental_allocated[356] = 0;
environmental_grid_ref[356] = "TQ7570";
environmental_details[356] = "Grid reference : TQ7570<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[357] = 51.149889;
environmental_lon[357] = 0.52934289;
environmental_2015[357] = 0;
environmental_allocated[357] = 0;
environmental_grid_ref[357] = "TQ7742";
environmental_details[357] = "Grid reference : TQ7742<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[358] = 51.148815;
environmental_lon[358] = 0.95828535;
environmental_2015[358] = 0;
environmental_allocated[358] = 0;
environmental_grid_ref[358] = "TR0743";
environmental_details[358] = "Grid reference : TR0743<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[359] = 53.14874;
environmental_lon[359] = -4.4088966;
environmental_2015[359] = 0;
environmental_allocated[359] = 1;
environmental_grid_ref[359] = "SH3964";
environmental_details[359] = "Grid reference : SH3964<BR>County : Isle of Anglesey - Ynys Môn<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Environmental_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[360] = 52.002604;
environmental_lon[360] = -2.6569265;
environmental_2015[360] = 1;
environmental_allocated[360] = 1;
environmental_grid_ref[360] = "SO5534";
environmental_details[360] = "Grid reference : SO5534<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/eDNA_method_overview.pdf'>View survey methodology</a><br>"
environmental_lat[361] = 53.816102;
environmental_lon[361] = -0.99903734;
environmental_2015[361] = 1;
environmental_allocated[361] = 1;
environmental_grid_ref[361] = "SE6636";
environmental_details[361] = "Grid reference : SE6636<BR>County : North and West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Toad_method_overview.pdf'>View survey methodology</a><br>"


//wetland pond:
wetland_lat[0] = 54.570354;
wetland_lon[0] = -3.0842522;
wetland_2015[0] = 1;
wetland_allocated[0] = 0;
wetland_grid_ref[0] = "NY3020";
wetland_details[0] = "Grid reference : NY3020<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[1] = 54.404103;
wetland_lon[1] = -2.2941978;
wetland_2015[1] = 1;
wetland_allocated[1] = 0;
wetland_grid_ref[1] = "NY8101";
wetland_details[1] = "Grid reference : NY8101<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[2] = 54.8624003301;
wetland_lon[2] = -2.31310980661;
wetland_2015[2] = 1;
wetland_allocated[2] = 0;
wetland_grid_ref[2] = "NY8052";
wetland_details[2] = "Grid reference : NY8052<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[3] = 54.952318;
wetland_lon[3] = -2.282578;
wetland_2015[3] = 1;
wetland_allocated[3] = 0;
wetland_grid_ref[3] = "NY8262";
wetland_details[3] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[4] = 55.141288;
wetland_lon[4] = -2.1270385;
wetland_2015[4] = 1;
wetland_allocated[4] = 1;
wetland_grid_ref[4] = "NY9283";
wetland_details[4] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[5] = 54.754227;
wetland_lon[5] = -1.5820112;
wetland_2015[5] = 1;
wetland_allocated[5] = 0;
wetland_grid_ref[5] = "NZ2740";
wetland_details[5] = "Grid reference : NZ2740<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[6] = 53.999383;
wetland_lon[6] = -1.6048597;
wetland_2015[6] = 1;
wetland_allocated[6] = 0;
wetland_grid_ref[6] = "NZ0912";
wetland_details[6] = "Grid reference : NZ0912<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[7] = 54.916529442;
wetland_lon[7] = -1.78312312644;
wetland_2015[7] = 1;
wetland_allocated[7] = 0;
wetland_grid_ref[7] = "NZ1458";
wetland_details[7] = "Grid reference : NZ1458<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[8] = 53.5636489346;
wetland_lon[8] = -3.08855565622;
wetland_2015[8] = 1;
wetland_allocated[8] = 0;
wetland_grid_ref[8] = "SD2808";
wetland_details[8] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[9] = 53.7624022374;
wetland_lon[9] = -2.9723298506;
wetland_2015[9] = 1;
wetland_allocated[9] = 0;
wetland_grid_ref[9] = "SD3630";
wetland_details[9] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[10] = 53.8551716738;
wetland_lon[10] = -2.5031806391;
wetland_2015[10] = 1;
wetland_allocated[10] = 0;
wetland_grid_ref[10] = "SD6740";
wetland_details[10] = "Grid reference : SD6740<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[11] = 54.089552;
wetland_lon[11] = -2.2919661;
wetland_2015[11] = 1;
wetland_allocated[11] = 0;
wetland_grid_ref[11] = "SD8166";
wetland_details[11] = "Grid reference : SD8166<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[12] = 53.810945;
wetland_lon[12] = -1.7129387;
wetland_2015[12] = 1;
wetland_allocated[12] = 0;
wetland_grid_ref[12] = "SE1935";
wetland_details[12] = "Grid reference : SE1935<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[13] = 52.960048;
wetland_lon[13] = -3.9070346;
wetland_2015[13] = 1;
wetland_allocated[13] = 1;
wetland_grid_ref[13] = "SH7242";
wetland_details[13] = "Grid reference : SH7242<BR>County : Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[14] = 53.06994;
wetland_lon[14] = -3.777548;
wetland_2015[14] = 1;
wetland_allocated[14] = 0;
wetland_grid_ref[14] = "SH8154";
wetland_details[14] = "Grid reference : SH8154<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[15] = 53.9639911006;
wetland_lon[15] = -0.522932667049;
wetland_2015[15] = 1;
wetland_allocated[15] = 0;
wetland_grid_ref[15] = "SE9753";
wetland_details[15] = "Grid reference : SE9753<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[16] = 52.9130687779;
wetland_lon[16] = -4.49997202286;
wetland_2015[16] = 1;
wetland_allocated[16] = 0;
wetland_grid_ref[16] = "SH3238";
wetland_details[16] = "Grid reference : SH3238<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[17] = 53.3624101824;
wetland_lon[17] = -4.51118015931;
wetland_2015[17] = 1;
wetland_allocated[17] = 0;
wetland_grid_ref[17] = "SH3388";
wetland_details[17] = "Grid reference : SH3388<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[18] = 52.9514384309;
wetland_lon[18] = -4.3830836192;
wetland_2015[18] = 1;
wetland_allocated[18] = 0;
wetland_grid_ref[18] = "SH4042";
wetland_details[18] = "Grid reference : SH4042<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[19] = 53.302018;
wetland_lon[19] = -4.3875014;
wetland_2015[19] = 1;
wetland_allocated[19] = 0;
wetland_grid_ref[19] = "SH4181";
wetland_details[19] = "Grid reference : SH4181<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[20] = 53.3921210935;
wetland_lon[20] = -4.37755850085;
wetland_2015[20] = 1;
wetland_allocated[20] = 0;
wetland_grid_ref[20] = "SH4291";
wetland_details[20] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[21] = 53.2765437624;
wetland_lon[21] = -4.31113553084;
wetland_2015[21] = 1;
wetland_allocated[21] = 0;
wetland_grid_ref[21] = "SH4678";
wetland_details[21] = "Grid reference : SH4678<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[22] = 52.5889545227;
wetland_lon[22] = -4.05332268023;
wetland_2015[22] = 1;
wetland_allocated[22] = 0;
wetland_grid_ref[22] = "SH6101";
wetland_details[22] = "Grid reference : SH6101<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[23] = 52.9675501917;
wetland_lon[23] = -3.99676450211;
wetland_2015[23] = 1;
wetland_allocated[23] = 0;
wetland_grid_ref[23] = "SH6643";
wetland_details[23] = "Grid reference : SH6643<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[24] = 52.8701874295;
wetland_lon[24] = -3.90313814227;
wetland_2015[24] = 1;
wetland_allocated[24] = 0;
wetland_grid_ref[24] = "SH7232";
wetland_details[24] = "Grid reference : SH7232<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[25] = 53.1865040942;
wetland_lon[25] = -3.79737805126;
wetland_2015[25] = 1;
wetland_allocated[25] = 0;
wetland_grid_ref[25] = "SH8067";
wetland_details[25] = "Grid reference : SH8067<BR>County : Conwy - Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[26] = 53.2907636017;
wetland_lon[26] = -3.3966620632;
wetland_2015[26] = 1;
wetland_allocated[26] = 0;
wetland_grid_ref[26] = "SJ0778";
wetland_details[26] = "Grid reference : SJ0778<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[27] = 52.8242997247;
wetland_lon[27] = -3.30744776728;
wetland_2015[27] = 1;
wetland_allocated[27] = 0;
wetland_grid_ref[27] = "SJ1226";
wetland_details[27] = "Grid reference : SJ1226<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[28] = 52.6267374656;
wetland_lon[28] = -3.28677673972;
wetland_2015[28] = 1;
wetland_allocated[28] = 0;
wetland_grid_ref[28] = "SJ1304";
wetland_details[28] = "Grid reference : SJ1304<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[29] = 52.7172422833;
wetland_lon[29] = -3.2302183645;
wetland_2015[29] = 1;
wetland_allocated[29] = 0;
wetland_grid_ref[29] = "SJ1714";
wetland_details[29] = "Grid reference : SJ1714<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[30] = 53.2388140454;
wetland_lon[30] = -3.21515485731;
wetland_2015[30] = 1;
wetland_allocated[30] = 0;
wetland_grid_ref[30] = "SJ1972";
wetland_details[30] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[31] = 52.6730471091;
wetland_lon[31] = -3.15502613582;
wetland_2015[31] = 1;
wetland_allocated[31] = 1;
wetland_grid_ref[31] = "SJ2209";
wetland_details[31] = "Grid reference : SJ2209<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[32] = 52.7361064011;
wetland_lon[32] = -3.14188107572;
wetland_2015[32] = 1;
wetland_allocated[32] = 1;
wetland_grid_ref[32] = "SJ2316";
wetland_details[32] = "Grid reference : SJ2316<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[33] = 53.1586686845;
wetland_lon[33] = -3.13810779667;
wetland_2015[33] = 1;
wetland_allocated[33] = 0;
wetland_grid_ref[33] = "SJ2463";
wetland_details[33] = "Grid reference : SJ2463<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[34] = 53.3656577161;
wetland_lon[34] = -3.11355946081;
wetland_2015[34] = 1;
wetland_allocated[34] = 1;
wetland_grid_ref[34] = "SJ2686";
wetland_details[34] = "Grid reference : SJ2686<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[35] = 53.0253081917;
wetland_lon[35] = -2.97058296714;
wetland_2015[35] = 1;
wetland_allocated[35] = 0;
wetland_grid_ref[35] = "SJ3548";
wetland_details[35] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[36] = 53.0976847836;
wetland_lon[36] = -2.91247124262;
wetland_2015[36] = 1;
wetland_allocated[36] = 0;
wetland_grid_ref[36] = "SJ3956";
wetland_details[36] = "Grid reference : SJ3956<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[37] = 52.7923052574;
wetland_lon[37] = -2.87640773795;
wetland_2015[37] = 1;
wetland_allocated[37] = 0;
wetland_grid_ref[37] = "SJ4122";
wetland_details[37] = "Grid reference : SJ4122<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[38] = 53.4236821689;
wetland_lon[38] = -2.51312008068;
wetland_2015[38] = 1;
wetland_allocated[38] = 1;
wetland_grid_ref[38] = "SJ6692";
wetland_details[38] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[39] = 53.316335;
wetland_lon[39] = -2.3767204;
wetland_2015[39] = 1;
wetland_allocated[39] = 1;
wetland_grid_ref[39] = "SJ7580";
wetland_details[39] = "Grid reference : SJ7580<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[40] = 52.94657;
wetland_lon[40] = -2.6562596;
wetland_2015[40] = 1;
wetland_allocated[40] = 1;
wetland_grid_ref[40] = "SJ5639";
wetland_details[40] = "Grid reference : SJ7941<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[41] = 53.0741901076;
wetland_lon[41] = -2.07609135513;
wetland_2015[41] = 1;
wetland_allocated[41] = 0;
wetland_grid_ref[41] = "SJ9553";
wetland_details[41] = "Grid reference : SJ9553<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[42] = 53.469736;
wetland_lon[42] = -2.0014677;
wetland_2015[42] = 1;
wetland_allocated[42] = 1;
wetland_grid_ref[42] = "SK0097";
wetland_details[42] = "Grid reference : SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[43] = 53.3168599109;
wetland_lon[43] = -1.8813815622;
wetland_2015[43] = 1;
wetland_allocated[43] = 0;
wetland_grid_ref[43] = "SK0880";
wetland_details[43] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[44] = 52.8395449926;
wetland_lon[44] = -1.52638762055;
wetland_2015[44] = 1;
wetland_allocated[44] = 0;
wetland_grid_ref[44] = "SK3227";
wetland_details[44] = "Grid reference : SK3227<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[45] = 52.650658;
wetland_lon[45] = -2.5040031;
wetland_2015[45] = 1;
wetland_allocated[45] = 0;
wetland_grid_ref[45] = "SJ6606";
wetland_details[45] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[46] = 52.686738;
wetland_lon[46] = -2.4748312;
wetland_2015[46] = 1;
wetland_allocated[46] = 0;
wetland_grid_ref[46] = "SJ6810";
wetland_details[46] = "Grid reference : SJ6810<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[47] = 52.619598;
wetland_lon[47] = -0.89359904;
wetland_2015[47] = 1;
wetland_allocated[47] = 1;
wetland_grid_ref[47] = "SK7503";
wetland_details[47] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[48] = 52.782912;
wetland_lon[48] = -1.0673832;
wetland_2015[48] = 1;
wetland_allocated[48] = 1;
wetland_grid_ref[48] = "SK6321";
wetland_details[48] = "Grid reference : SK6321<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[49] = 50.8388677028;
wetland_lon[49] = -0.1550738877;
wetland_2015[49] = 1;
wetland_allocated[49] = 0;
wetland_grid_ref[49] = "TQ3006";
wetland_details[49] = "Grid reference : TQ3006<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[50] = 52.56125;
wetland_lon[50] = -4.0962363;
wetland_2015[50] = 1;
wetland_allocated[50] = 1;
wetland_grid_ref[50] = "SN5898";
wetland_details[50] = "Grid reference : SN5898<BR>County : Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[51] = 52.402995;
wetland_lon[51] = -3.8829137;
wetland_2015[51] = 1;
wetland_allocated[51] = 0;
wetland_grid_ref[51] = "SN7280";
wetland_details[51] = "Grid reference : SN7280<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[52] = 52.095831;
wetland_lon[52] = -3.3297965;
wetland_2015[52] = 1;
wetland_allocated[52] = 1;
wetland_grid_ref[52] = "SO0945";
wetland_details[52] = "Grid reference : SO0945<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[53] = 52.12344;
wetland_lon[53] = -3.2721894;
wetland_2015[53] = 1;
wetland_allocated[53] = 1;
wetland_grid_ref[53] = "SO1348";
wetland_details[53] = "Grid reference : SO1348<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[54] = 52.223078;
wetland_lon[54] = -3.2018367;
wetland_2015[54] = 1;
wetland_allocated[54] = 1;
wetland_grid_ref[54] = "SO1859";
wetland_details[54] = "Grid reference : SO1859<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[55] = 52.1923503245;
wetland_lon[55] = -4.10815100409;
wetland_2015[55] = 1;
wetland_allocated[55] = 0;
wetland_grid_ref[55] = "SN5657";
wetland_details[55] = "Grid reference : SN5657<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[56] = 52.330938;
wetland_lon[56] = -3.2047588;
wetland_2015[56] = 1;
wetland_allocated[56] = 0;
wetland_grid_ref[56] = "SO1871";
wetland_details[56] = "Grid reference : SO1871<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[57] = 52.566926;
wetland_lon[57] = -2.9604011;
wetland_2015[57] = 1;
wetland_allocated[57] = 1;
wetland_grid_ref[57] = "SO3597";
wetland_details[57] = "Grid reference : SO3597<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[58] = 52.5457764465;
wetland_lon[58] = -3.94806516098;
wetland_2015[58] = 1;
wetland_allocated[58] = 0;
wetland_grid_ref[58] = "SN6896";
wetland_details[58] = "Grid reference : SN6896<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[59] = 52.55873;
wetland_lon[59] = -2.8569656;
wetland_2015[59] = 1;
wetland_allocated[59] = 1;
wetland_grid_ref[59] = "SO4296";
wetland_details[59] = "Grid reference : SO4296<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[60] = 52.002604;
wetland_lon[60] = -2.6569265;
wetland_2015[60] = 1;
wetland_allocated[60] = 0;
wetland_grid_ref[60] = "SO5534";
wetland_details[60] = "Grid reference : SO5534<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[61] = 51.841498;
wetland_lon[61] = -2.5094273;
wetland_2015[61] = 1;
wetland_allocated[61] = 1;
wetland_grid_ref[61] = "SO6516";
wetland_details[61] = "Grid reference : SO6516<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[62] = 52.442629198;
wetland_lon[62] = -3.63452120174;
wetland_2015[62] = 1;
wetland_allocated[62] = 1;
wetland_grid_ref[62] = "SN8984";
wetland_details[62] = "Grid reference : SN8984<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[63] = 52.183371;
wetland_lon[63] = -2.4548225;
wetland_2015[63] = 1;
wetland_allocated[63] = 0;
wetland_grid_ref[63] = "SO6954";
wetland_details[63] = "Grid reference : SO6954<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[64] = 51.8788852824;
wetland_lon[64] = -3.42512399392;
wetland_2015[64] = 1;
wetland_allocated[64] = 0;
wetland_grid_ref[64] = "SO0221";
wetland_details[64] = "Grid reference : SO0221<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[65] = 52.3644088498;
wetland_lon[65] = -3.42601044244;
wetland_2015[65] = 1;
wetland_allocated[65] = 0;
wetland_grid_ref[65] = "SO0375";
wetland_details[65] = "Grid reference : SO0375<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[66] = 52.4641369769;
wetland_lon[66] = -3.35563025193;
wetland_2015[66] = 1;
wetland_allocated[66] = 0;
wetland_grid_ref[66] = "SO0886";
wetland_details[66] = "Grid reference : SO0886<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[67] = 52.0957964621;
wetland_lon[67] = -3.32983663302;
wetland_2015[67] = 1;
wetland_allocated[67] = 0;
wetland_grid_ref[67] = "SO0945";
wetland_details[67] = "Grid reference : SO0945<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[68] = 52.5284972133;
wetland_lon[68] = -3.22493708831;
wetland_2015[68] = 1;
wetland_allocated[68] = 0;
wetland_grid_ref[68] = "SO1793";
wetland_details[68] = "Grid reference : SO1793<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[69] = 52.2230462845;
wetland_lon[69] = -3.20187369128;
wetland_2015[69] = 1;
wetland_allocated[69] = 0;
wetland_grid_ref[69] = "SO1859";
wetland_details[69] = "Grid reference : SO1859<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[70] = 51.869281;
wetland_lon[70] = -2.2628348;
wetland_2015[70] = 1;
wetland_allocated[70] = 1;
wetland_grid_ref[70] = "SO8219";
wetland_details[70] = "Grid reference : SO8219<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[71] = 52.507625;
wetland_lon[71] = -2.2518965;
wetland_2015[71] = 1;
wetland_allocated[71] = 0;
wetland_grid_ref[71] = "SO8390";
wetland_details[71] = "Grid reference : SO8390<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[72] = 52.148241;
wetland_lon[72] = -2.103717;
wetland_2015[72] = 1;
wetland_allocated[72] = 0;
wetland_grid_ref[72] = "SO9350";
wetland_details[72] = "Grid reference : SO9350<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[73] = 52.112301;
wetland_lon[73] = -2.074428;
wetland_2015[73] = 1;
wetland_allocated[73] = 0;
wetland_grid_ref[73] = "SO9546";
wetland_details[73] = "Grid reference : SO9546<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[74] = 52.074543;
wetland_lon[74] = -1.3448443;
wetland_2015[74] = 1;
wetland_allocated[74] = 0;
wetland_grid_ref[74] = "SP4542";
wetland_details[74] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[75] = 52.334905;
wetland_lon[75] = -1.2823008;
wetland_2015[75] = 1;
wetland_allocated[75] = 1;
wetland_grid_ref[75] = "SP4971";
wetland_details[75] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[76] = 51.72341;
wetland_lon[76] = -1.2630661;
wetland_2015[76] = 1;
wetland_allocated[76] = 1;
wetland_grid_ref[76] = "SP5103";
wetland_details[76] = "Grid reference : SP5103<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[77] = 52.522904;
wetland_lon[77] = -1.1613315;
wetland_2015[77] = 1;
wetland_allocated[77] = 0;
wetland_grid_ref[77] = "SP5792";
wetland_details[77] = "Grid reference : SP5792<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[78] = 51.812528;
wetland_lon[78] = -1.1455667;
wetland_2015[78] = 1;
wetland_allocated[78] = 1;
wetland_grid_ref[78] = "SP5913";
wetland_details[78] = "Grid reference : SP5913<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[79] = 51.014761;
wetland_lon[79] = -3.4982159;
wetland_2015[79] = 1;
wetland_allocated[79] = 0;
wetland_grid_ref[79] = "SS9525";
wetland_details[79] = "Grid reference : SS9525<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[80] = 51.436138;
wetland_lon[80] = -1.3396279;
wetland_2015[80] = 1;
wetland_allocated[80] = 1;
wetland_grid_ref[80] = "SU4671";
wetland_details[80] = "Grid reference : SU4671<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[81] = 52.498895;
wetland_lon[81] = -2.03090216683;
wetland_2015[81] = 1;
wetland_allocated[81] = 0;
wetland_grid_ref[81] = "SO9789";
wetland_details[81] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[82] = 50.836244;
wetland_lon[82] = -0.60965864;
wetland_2015[82] = 1;
wetland_allocated[82] = 1;
wetland_grid_ref[82] = "SU9805";
wetland_details[82] = "Grid reference : SU9805<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[83] = 52.5511248603;
wetland_lon[83] = -1.36726662756;
wetland_2015[83] = 1;
wetland_allocated[83] = 0;
wetland_grid_ref[83] = "SP4395";
wetland_details[83] = "Grid reference : SP4395<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[84] = 51.7059739276;
wetland_lon[84] = -1.36465409396;
wetland_2015[84] = 1;
wetland_allocated[84] = 0;
wetland_grid_ref[84] = "SP4401";
wetland_details[84] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[85] = 51.8767961879;
wetland_lon[85] = -1.3622492636;
wetland_2015[85] = 1;
wetland_allocated[85] = 0;
wetland_grid_ref[85] = "SP4420";
wetland_details[85] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[86] = 51.168164;
wetland_lon[86] = 0.51603741;
wetland_2015[86] = 1;
wetland_allocated[86] = 1;
wetland_grid_ref[86] = "TQ7644";
wetland_details[86] = "Grid reference : TQ7644<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[87] = 50.779579;
wetland_lon[87] = -2.6821859;
wetland_2015[87] = 1;
wetland_allocated[87] = 0;
wetland_grid_ref[87] = "SY5298";
wetland_details[87] = "Grid reference : SY5298<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[88] = 50.646629;
wetland_lon[88] = -2.1145107;
wetland_2015[88] = 1;
wetland_allocated[88] = 1;
wetland_grid_ref[88] = "SY9283";
wetland_details[88] = "Grid reference : SY9283<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[89] = 51.816901;
wetland_lon[89] = -0.65222472;
wetland_2015[89] = 1;
wetland_allocated[89] = 0;
wetland_grid_ref[89] = "SP9314";
wetland_details[89] = "Grid reference : SP9314<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[90] = 50.9428350041;
wetland_lon[90] = -4.5351391786;
wetland_2015[90] = 1;
wetland_allocated[90] = 0;
wetland_grid_ref[90] = "SS2219";
wetland_details[90] = "Grid reference : SS2219<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[91] = 52.569311;
wetland_lon[91] = -0.42270311;
wetland_2015[91] = 1;
wetland_allocated[91] = 0;
wetland_grid_ref[91] = "TL0798";
wetland_details[91] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[92] = 51.0162310722;
wetland_lon[92] = -3.99732359911;
wetland_2015[92] = 1;
wetland_allocated[92] = 0;
wetland_grid_ref[92] = "SS6026";
wetland_details[92] = "Grid reference : SS6026<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[93] = 50.9448176679;
wetland_lon[93] = -3.96578895546;
wetland_2015[93] = 1;
wetland_allocated[93] = 0;
wetland_grid_ref[93] = "SS6218";
wetland_details[93] = "Grid reference : SS6218<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[94] = 50.9277869015;
wetland_lon[94] = -3.90814819152;
wetland_2015[94] = 1;
wetland_allocated[94] = 0;
wetland_grid_ref[94] = "SS6616";
wetland_details[94] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[95] = 52.430698;
wetland_lon[95] = -0.16288831;
wetland_2015[95] = 1;
wetland_allocated[95] = 1;
wetland_grid_ref[95] = "TL2583";
wetland_details[95] = "Grid reference : TL2583<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[96] = 51.924174;
wetland_lon[96] = 0.019966472;
wetland_2015[96] = 1;
wetland_allocated[96] = 0;
wetland_grid_ref[96] = "TL3927";
wetland_details[96] = "Grid reference : TL3927<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[97] = 51.272524;
wetland_lon[97] = -0.28113935;
wetland_2015[97] = 1;
wetland_allocated[97] = 1;
wetland_grid_ref[97] = "TQ2054";
wetland_details[97] = "Grid reference : TQ2054<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[98] = 51.069274;
wetland_lon[98] = 0.053887989;
wetland_2015[98] = 1;
wetland_allocated[98] = 1;
wetland_grid_ref[98] = "TQ4432";
wetland_details[98] = "Grid reference : TQ4432<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[99] = 51.4559060421;
wetland_lon[99] = -2.07337052562;
wetland_2015[99] = 1;
wetland_allocated[99] = 0;
wetland_grid_ref[99] = "ST9573";
wetland_details[99] = "Grid reference : ST9573<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[100] = 51.6263428283;
wetland_lon[100] = -1.68359109016;
wetland_2015[100] = 1;
wetland_allocated[100] = 0;
wetland_grid_ref[100] = "SU2292";
wetland_details[1040] = "Grid reference : SU2292<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[101] = 50.9607812033;
wetland_lon[101] = -1.63117650697;
wetland_2015[101] = 1;
wetland_allocated[101] = 1;
wetland_grid_ref[101] = "SU2618";
wetland_details[101] = "Grid reference : SU2618<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[102] = 50.8871802393;
wetland_lon[102] = -1.27633923263;
wetland_2015[102] = 1;
wetland_allocated[102] = 1;
wetland_grid_ref[102] = "SU5110";
wetland_details[102] = "Grid reference : SU5110<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[103] = 51.1553990917;
wetland_lon[103] = -1.05766340784;
wetland_2015[103] = 1;
wetland_allocated[103] = 1;
wetland_grid_ref[103] = "SU6640";
wetland_details[103] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[104] = 51.314565825;
wetland_lon[104] = -0.767428778795;
wetland_2015[104] = 1;
wetland_allocated[104] = 0;
wetland_grid_ref[104] = "SU8658";
wetland_details[104] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[105] = 50.242064551;
wetland_lon[105] = -5.22716181437;
wetland_2015[105] = 1;
wetland_allocated[105] = 0;
wetland_grid_ref[105] = "SW7043";
wetland_details[105] = "Grid reference : SW7043<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[106] = 50.4229672212;
wetland_lon[106] = -4.84518619362;
wetland_2015[106] = 1;
wetland_allocated[106] = 0;
wetland_grid_ref[106] = "SW9862";
wetland_details[106] = "Grid reference : SW9862<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[107] = 50.5726288415;
wetland_lon[107] = -4.59995147754;
wetland_2015[107] = 1;
wetland_allocated[107] = 0;
wetland_grid_ref[107] = "SX1678";
wetland_details[107] = "Grid reference : SX1678<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[108] = 50.6637838472;
wetland_lon[108] = -1.5627623943;
wetland_2015[108] = 1;
wetland_allocated[108] = 1;
wetland_grid_ref[108] = "SZ3185";
wetland_details[108] = "Grid reference : SZ3185<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[109] = 54.0083437589;
wetland_lon[109] = -0.475581682379;
wetland_2015[109] = 1;
wetland_allocated[109] = 0;
wetland_grid_ref[109] = "TA0058";
wetland_details[109] = "Grid reference : TA0058<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[110] = 54.3677174898;
wetland_lon[110] = -0.462299842079;
wetland_2015[110] = 1;
wetland_allocated[110] = 0;
wetland_grid_ref[110] = "TA0098";
wetland_details[110] = "Grid reference : TA0098<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[111] = 54.2054089071;
wetland_lon[111] = -0.4223360298;
wetland_2015[111] = 1;
wetland_allocated[111] = 0;
wetland_grid_ref[111] = "TA0380";
wetland_details[111] = "Grid reference : TA0380<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[112] = 54.139066;
wetland_lon[112] = -0.17995673;
wetland_2015[112] = 1;
wetland_allocated[112] = 0;
wetland_grid_ref[112] = "TA1973";
wetland_details[112] = "Grid reference : TA1973<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/04/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[113] = 52.0124633685;
wetland_lon[113] = -0.471484433724;
wetland_2015[113] = 1;
wetland_allocated[113] = 0;
wetland_grid_ref[113] = "TL0536";
wetland_details[113] = "Grid reference : TL0536<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[114] = 52.2182007512;
wetland_lon[114] = -0.391234905322;
wetland_2015[114] = 1;
wetland_allocated[114] = 0;
wetland_grid_ref[114] = "TL1059";
wetland_details[114] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[115] = 51.4647362637;
wetland_lon[115] = -0.533046978082;
wetland_2015[115] = 1;
wetland_allocated[115] = 0;
wetland_grid_ref[115] = "TQ0275";
wetland_details[115] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[116] = 52.595469;
wetland_lon[116] = -0.36270666;
wetland_2015[116] = 1;
wetland_allocated[116] = 1;
wetland_grid_ref[116] = "TF1101";
wetland_details[116] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Wetland_plant_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[117] = 53.316872;
wetland_lon[117] = -1.8813774;
wetland_2015[117] = 0;
wetland_allocated[117] = 0;
wetland_grid_ref[117] = "SK0880";
wetland_details[117] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[118] = 53.1631189;
wetland_lon[118] = -1.8219699;
wetland_2015[118] = 0;
wetland_allocated[118] = 0;
wetland_grid_ref[118] = "SK1263";
wetland_details[118] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[119] = 53.412407;
wetland_lon[119] = -1.098807;
wetland_2015[119] = 0;
wetland_allocated[119] = 0;
wetland_grid_ref[119] = "SK6091";
wetland_details[119] = "Grid reference : SK6091<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[120] = 53.483589;
wetland_lon[120] = -1.0068801;
wetland_2015[120] = 0;
wetland_allocated[120] = 0;
wetland_grid_ref[120] = "SK6699";
wetland_details[120] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[121] = 52.890163;
wetland_lon[121] = -0.99076713;
wetland_2015[121] = 0;
wetland_allocated[121] = 0;
wetland_grid_ref[121] = "SK6833";
wetland_details[121] = "Grid reference : SK6833<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[122] = 51.840874;
wetland_lon[122] = -4.9772323;
wetland_2015[122] = 0;
wetland_allocated[122] = 0;
wetland_grid_ref[122] = "SM9520";
wetland_details[122] = "Grid reference : SM9520<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[123] = 51.950078;
wetland_lon[123] = -4.9262472;
wetland_2015[123] = 0;
wetland_allocated[123] = 0;
wetland_grid_ref[123] = "SM9932";
wetland_details[123] = "Grid reference : SM9932<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[124] = 51.844256;
wetland_lon[124] = -4.4402295;
wetland_2015[124] = 0;
wetland_allocated[124] = 0;
wetland_grid_ref[124] = "SN3219";
wetland_details[124] = "Grid reference : SN3219<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

wetland_lat[125] = 51.730948;
wetland_lon[125] = -4.2603315;
wetland_2015[125] = 0;
wetland_allocated[125] = 0;
wetland_grid_ref[125] = "SN4406";
wetland_details[125] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[126] = 51.961044;
wetland_lon[126] = -3.9662199;
wetland_2015[126] = 0;
wetland_allocated[126] = 0;
wetland_grid_ref[126] = "SN6531";
wetland_details[126] = "Grid reference : SN6531<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

wetland_lat[127] = 51.727657;
wetland_lon[127] = -3.9415926;
wetland_2015[127] = 0;
wetland_allocated[127] = 0;
wetland_grid_ref[127] = "SN6605";
wetland_details[127] = "Grid reference : SN6605<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[128] = 51.720526;
wetland_lon[128] = -3.8254635;
wetland_2015[128] = 0;
wetland_allocated[128] = 0;
wetland_grid_ref[128] = "SN7404";
wetland_details[128] = "Grid reference : SN7404<BR>County : Castell-nedd Port Talbot - Neath Port Talbot<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[129] = 51.900703;
wetland_lon[129] = -3.8036891;
wetland_2015[129] = 0;
wetland_allocated[129] = 0;
wetland_grid_ref[129] = "SN7624";
wetland_details[129] = "Grid reference : SN7624<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[130] = 51.798031;
wetland_lon[130] = -3.4225284;
wetland_2015[130] = 0;
wetland_allocated[130] = 0;
wetland_grid_ref[130] = "SO0212";
wetland_details[130] = "Grid reference : SO0212<BR>County : Merthyr Tudful - Merthyr Tydfil<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[131] = 51.857015;
wetland_lon[131] = -2.916167;
wetland_2015[131] = 0;
wetland_allocated[131] = 0;
wetland_grid_ref[131] = "SO3718";
wetland_details[131] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[132] = 51.812397;
wetland_lon[132] = -2.8717438;
wetland_2015[132] = 0;
wetland_allocated[132] = 0;
wetland_grid_ref[132] = "SO4013";
wetland_details[132] = "Grid reference : SO4013<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[133] = 51.741636;
wetland_lon[133] = -2.6965827;
wetland_2015[133] = 0;
wetland_allocated[133] = 0;
wetland_grid_ref[133] = "SO5205";
wetland_details[133] = "Grid reference : SO5205<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[134] = 51.813559;
wetland_lon[134] = -2.6976914;
wetland_2015[134] = 0;
wetland_allocated[134] = 0;
wetland_grid_ref[134] = "SO5213";
wetland_details[134] = "Grid reference : SO5213<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[135] = 51.833458;
wetland_lon[135] = -2.1900643;
wetland_2015[135] = 0;
wetland_allocated[135] = 0;
wetland_grid_ref[135] = "SO8715";
wetland_details[135] = "Grid reference : SO8715<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[136] = 51.579845;
wetland_lon[136] = -4.1662199;
wetland_2015[136] = 0;
wetland_allocated[136] = 0;
wetland_grid_ref[136] = "SS5089";
wetland_details[136] = "Grid reference : SS5089<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[137] = 51.464384;
wetland_lon[137] = -3.4985023;
wetland_2015[137] = 0;
wetland_allocated[137] = 0;
wetland_grid_ref[137] = "SS9675";
wetland_details[137] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[138] = 51.429151;
wetland_lon[138] = -3.4398094;
wetland_2015[138] = 0;
wetland_allocated[138] = 0;
wetland_grid_ref[138] = "ST0071";
wetland_details[138] = "Grid reference : ST0071<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[139] = 51.465628;
wetland_lon[139] = -3.3977686;
wetland_2015[139] = 0;
wetland_allocated[139] = 0;
wetland_grid_ref[139] = "ST0375";
wetland_details[139] = "Grid reference : ST0375<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"

wetland_lat[140] = 51.169325;
wetland_lon[140] = -3.360182;
wetland_2015[140] = 0;
wetland_allocated[140] = 0;
wetland_grid_ref[140] = "ST0542";
wetland_details[140] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[141] = 51.585844;
wetland_lon[141] = -3.0839063;
wetland_2015[141] = 0;
wetland_allocated[141] = 0;
wetland_grid_ref[141] = "ST2588";
wetland_details[141] = "Grid reference : ST2588<BR>County : Casnewydd - Newport<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[142] = 51.301708;
wetland_lon[142] = -2.5751468;
wetland_2015[142] = 0;
wetland_allocated[142] = 0;
wetland_grid_ref[142] = "ST6056";
wetland_details[142] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[143] = 51.284492;
wetland_lon[143] = -2.388528;
wetland_2015[143] = 0;
wetland_allocated[143] = 0;
wetland_grid_ref[143] = "ST7354";
wetland_details[143] = "Grid reference : ST7354<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[144] = 53.333101;
wetland_lon[144] = -0.39466768;
wetland_2015[144] = 0;
wetland_allocated[144] = 0;
wetland_grid_ref[144] = "TF0783";
wetland_details[144] = "Grid reference : TF0783<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[145] = 53.332898;
wetland_lon[145] = -0.37965746;
wetland_2015[145] = 0;
wetland_allocated[145] = 0;
wetland_grid_ref[145] = "TF0883";
wetland_details[145] = "Grid reference : TF0883<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[146] = 52.595469;
wetland_lon[146] = -0.36270666;
wetland_2015[146] = 0;
wetland_allocated[146] = 0;
wetland_grid_ref[146] = "TF1101";
wetland_details[146] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[147] = 53.368007;
wetland_lon[147] = -0.31820437;
wetland_2015[147] = 0;
wetland_allocated[147] = 0;
wetland_grid_ref[147] = "TF1287";
wetland_details[147] = "Grid reference : TF1287<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[148] = 52.592888;
wetland_lon[148] = -0.18563893;
wetland_2015[148] = 0;
wetland_allocated[148] = 0;
wetland_grid_ref[148] = "TF2301";
wetland_details[148] = "Grid reference : TF2301<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[149] = 52.661163;
wetland_lon[149] = 0.038994002;
wetland_2015[149] = 0;
wetland_allocated[149] = 0;
wetland_grid_ref[149] = "TF3809";
wetland_details[149] = "Grid reference : TF3809<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[150] = 52.992779;
wetland_lon[150] = 0.099284333;
wetland_2015[150] = 0;
wetland_allocated[150] = 0;
wetland_grid_ref[150] = "TF4146";
wetland_details[150] = "Grid reference : TF4146<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[151] = 53.108215;
wetland_lon[151] = 0.17960638;
wetland_2015[151] = 0;
wetland_allocated[151] = 0;
wetland_grid_ref[151] = "TF4659";
wetland_details[151] = "Grid reference : TF4659<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[152] = 53.29629;
wetland_lon[152] = 0.21918516;
wetland_2015[152] = 0;
wetland_allocated[152] = 0;
wetland_grid_ref[152] = "TF4880";
wetland_details[152] = "Grid reference : TF4880<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[153] = 52.641836;
wetland_lon[153] = 0.57023036;
wetland_2015[153] = 0;
wetland_allocated[153] = 0;
wetland_grid_ref[153] = "TF7408";
wetland_details[153] = "Grid reference : TF7408<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[154] = 52.599147;
wetland_lon[154] = 0.86309696;
wetland_2015[154] = 0;
wetland_allocated[154] = 0;
wetland_grid_ref[154] = "TF9404";
wetland_details[154] = "Grid reference : TF9404<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[155] = 52.718097;
wetland_lon[155] = 1.137457;
wetland_2015[155] = 0;
wetland_allocated[155] = 0;
wetland_grid_ref[155] = "TG1218";
wetland_details[155] = "Grid reference : TG1218<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[156] = 51.708771;
wetland_lon[156] = -0.004118918;
wetland_2015[156] = 0;
wetland_allocated[156] = 0;
wetland_grid_ref[156] = "TL3803";
wetland_details[156] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[157] = 52.013267;
wetland_lon[157] = 0.067695002;
wetland_2015[157] = 0;
wetland_allocated[157] = 0;
wetland_grid_ref[157] = "TL4237";
wetland_details[157] = "Grid reference : TL4237<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[158] = 52.296979;
wetland_lon[158] = 0.28620994;
wetland_2015[158] = 0;
wetland_allocated[158] = 0;
wetland_grid_ref[158] = "TL5669";
wetland_details[158] = "Grid reference : TL5669<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[159] = 52.172896;
wetland_lon[159] = 0.63086107;
wetland_2015[159] = 0;
wetland_allocated[159] = 0;
wetland_grid_ref[159] = "TL8056";
wetland_details[159] = "Grid reference : TL8056<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[160] = 52.298627;
wetland_lon[160] = 0.63830969;
wetland_2015[160] = 0;
wetland_allocated[160] = 0;
wetland_grid_ref[160] = "TL8070";
wetland_details[160] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[161] = 52.03074;
wetland_lon[161] = 1.278641;
wetland_2015[161] = 0;
wetland_allocated[161] = 0;
wetland_grid_ref[161] = "TM2542";
wetland_details[161] = "Grid reference : TM2542<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[162] = 52.147898;
wetland_lon[162] = 1.5796635;
wetland_2015[162] = 0;
wetland_allocated[162] = 0;
wetland_grid_ref[162] = "TM4556";
wetland_details[162] = "Grid reference : TM4556<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[163] = 51.597876;
wetland_lon[163] = 0.16428629;
wetland_2015[163] = 0;
wetland_allocated[163] = 0;
wetland_grid_ref[163] = "TQ5091";
wetland_details[163] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[164] = 51.546374;
wetland_lon[164] = 0.49358131;
wetland_2015[164] = 0;
wetland_allocated[164] = 0;
wetland_grid_ref[164] = "TQ7386";
wetland_details[164] = "Grid reference : TQ7386<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[165] = 51.456238;
wetland_lon[165] = 0.50305999;
wetland_2015[165] = 0;
wetland_allocated[165] = 0;
wetland_grid_ref[165] = "TQ7476";
wetland_details[165] = "Grid reference : TQ7476<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[166] = 51.463663;
wetland_lon[166] = 0.5754557;
wetland_2015[166] = 0;
wetland_allocated[166] = 0;
wetland_grid_ref[166] = "TQ7977";
wetland_details[166] = "Grid reference : TQ7977<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[167] = 51.148815;
wetland_lon[167] = 0.95828535;
wetland_2015[167] = 0;
wetland_allocated[167] = 0;
wetland_grid_ref[167] = "TR0743";
wetland_details[167] = "Grid reference : TR0743<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[168] = 51.300375;
wetland_lon[168] = 1.0110682;
wetland_2015[168] = 0;
wetland_allocated[168] = 0;
wetland_grid_ref[168] = "TR1060";
wetland_details[168] = "Grid reference : TR1060<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
wetland_lat[169] = 53.14874;
wetland_lon[169] = -4.4088966;
wetland_2015[169] = 0;
wetland_allocated[169] = 0;
wetland_grid_ref[169] = "SH3964";
wetland_details[169] = "Grid reference : SH3964<BR>County : Isle of Anglesey - Ynys Môn<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"




//Invertebrates:
invertebrate_lat[0] = 54.570354;
invertebrate_lon[0] = -3.0842522;
invertebrate_2015[0] = 1;
invertebrate_allocated[0] = 0;
invertebrate_grid_ref[0] = "NY3020";
invertebrate_details[0] = "Grid reference : NY3020<BR>County : Cumbria<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[1] = 54.8624003301;
invertebrate_lon[1] = -2.31310980661;
invertebrate_2015[1] = 1;
invertebrate_allocated[1] = 0;
invertebrate_grid_ref[1] = "NY8052";
invertebrate_details[1] = "Grid reference : NY8052<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[2] = 54.404103;
invertebrate_lon[2] = -2.2941978;
invertebrate_2015[2] = 1;
invertebrate_allocated[2] = 0;
invertebrate_grid_ref[2] = "NY8101";
invertebrate_details[2] = "Grid reference : NY8101<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[3] = 54.952318;
invertebrate_lon[3] = -2.282578;
invertebrate_2015[3] = 1;
invertebrate_allocated[3] = 0;
invertebrate_grid_ref[3] = "NY8262";
invertebrate_details[3] = "Grid reference : NY8262<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[4] = 55.141288;
invertebrate_lon[4] = -2.1270385;
invertebrate_2015[4] = 1;
invertebrate_allocated[4] = 0;
invertebrate_grid_ref[4] = "NY9283";
invertebrate_details[4] = "Grid reference : NY9283<BR>County : Northumberland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[5] = 53.999383;
invertebrate_lon[5] = -1.6048597;
invertebrate_2015[5] = 1;
invertebrate_allocated[5] = 0;
invertebrate_grid_ref[5] = "NZ0912";
invertebrate_details[5] = "Grid reference : NZ0912<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[6] = 54.916529442;
invertebrate_lon[6] = -1.78312312644;
invertebrate_2015[6] = 1;
invertebrate_allocated[6] = 0;
invertebrate_grid_ref[6] = "NZ1458";
invertebrate_details[6] = "Grid reference : NZ1458<BR>County : Tyne and Wear<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[7] = 54.754227;
invertebrate_lon[7] = - -1.5820112;
invertebrate_2015[7] = 1;
invertebrate_allocated[7] = 0;
invertebrate_grid_ref[7] = "NZ2740 ";
invertebrate_details[7] = "Grid reference : NZ2740<BR>County : Durham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[8] = 53.5636489346;
invertebrate_lon[8] = -3.08855565622;
invertebrate_2015[8] = 1;
invertebrate_allocated[8] = 0;
invertebrate_grid_ref[8] = "SD2808";
invertebrate_details[8] = "Grid reference : SD2808<BR>County : Merseyside<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[9] = 53.7624022374;
invertebrate_lon[9] = -2.9723298506;
invertebrate_2015[9] = 1;
invertebrate_allocated[9] = 0;
invertebrate_grid_ref[9] = "SD3630";
invertebrate_details[9] = "Grid reference : SD3630<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[10] = 53.8551716738;
invertebrate_lon[10] = -2.5031806391;
invertebrate_2015[10] = 1;
invertebrate_allocated[10] = 0;
invertebrate_grid_ref[10] = "SD6740";
invertebrate_details[10] = "Grid reference : SD6740<BR>County : Lancashire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[11] = 53.810945;
invertebrate_lon[11] = -1.7129387;
invertebrate_2015[11] = 1;
invertebrate_allocated[11] = 0;
invertebrate_grid_ref[11] = "SE1935";
invertebrate_details[11] = "Grid reference : SE1935<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[12] = 54.089552;
invertebrate_lon[12] = -2.2919661;
invertebrate_2015[12] = 1;
invertebrate_allocated[12] = 0;
invertebrate_grid_ref[12] = "SD8166";
invertebrate_details[12] = "Grid reference : SD8166<BR>County : North & West Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[13] = 53.06994;
invertebrate_lon[13] = -3.777548;
invertebrate_2015[13] = 1;
invertebrate_allocated[13] = 0;
invertebrate_grid_ref[13] = "SH8154";
invertebrate_details[13] = "Grid reference : SH8154<BR>County : Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[14] = 52.650658;
invertebrate_lon[14] = -2.5040031;
invertebrate_2015[14] = 1;
invertebrate_allocated[14] = 0;
invertebrate_grid_ref[14] = " SJ6606";
invertebrate_details[14] = "Grid reference : SJ6606<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[15] = 53.9639911006;
invertebrate_lon[15] = -0.522932667049;
invertebrate_2015[15] = 1;
invertebrate_allocated[15] = 0;
invertebrate_grid_ref[15] = "SE9753";
invertebrate_details[15] = "Grid reference : SE9753<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[16] = 52.9130687779;
invertebrate_lon[16] = -4.49997202286;
invertebrate_2015[16] = 1;
invertebrate_allocated[16] = 0;
invertebrate_grid_ref[16] = "SH3238";
invertebrate_details[16] = "Grid reference : SH3238<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[17] = 53.3624101824;
invertebrate_lon[17] = -4.51118015931;
invertebrate_2015[17] = 1;
invertebrate_allocated[17] = 0;
invertebrate_grid_ref[17] = "SH3388";
invertebrate_details[17] = "Grid reference : SH3388<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[18] = 52.9514384309;
invertebrate_lon[18] = -4.3830836192;
invertebrate_2015[18] = 1;
invertebrate_allocated[18] = 0;
invertebrate_grid_ref[18] = "SH4042";
invertebrate_details[18] = "Grid reference : SH4042<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[19] = 53.302018;
invertebrate_lon[19] = -4.3875014;
invertebrate_2015[19] = 1;
invertebrate_allocated[19] = 0;
invertebrate_grid_ref[19] = "SH4181";
invertebrate_details[19] = "Grid reference : SH4181<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[20] = 53.3921210935;
invertebrate_lon[20] = -4.37755850085;
invertebrate_2015[20] = 1;
invertebrate_allocated[20] = 0;
invertebrate_grid_ref[20] = "SH4291";
invertebrate_details[20] = "Grid reference : SH4291<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[21] = 53.2765437624;
invertebrate_lon[21] = -4.31113553084;
invertebrate_2015[21] = 1;
invertebrate_allocated[21] = 0;
invertebrate_grid_ref[21] = "SH4678";
invertebrate_details[21] = "Grid reference : SH4678<BR>County : Sir Ynys Mon - Isle of Anglesey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[22] = 52.5889545227;
invertebrate_lon[22] = -4.05332268023;
invertebrate_2015[22] = 1;
invertebrate_allocated[22] = 0;
invertebrate_grid_ref[22] = "SH6101";
invertebrate_details[22] = "Grid reference : SH6101<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[23] = 52.9675501917;
invertebrate_lon[23] = -3.99676450211;
invertebrate_2015[23] = 1;
invertebrate_allocated[23] = 0;
invertebrate_grid_ref[23] = "SH6643";
invertebrate_details[23] = "Grid reference : SH6643<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[24] = 52.8701874295;
invertebrate_lon[24] = -3.90313814227;
invertebrate_2015[24] = 1;
invertebrate_allocated[24] = 0;
invertebrate_grid_ref[24] = "SH7232";
invertebrate_details[24] = "Grid reference : SH7232<BR>County : Gwynedd - Gwynedd<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[25] = 53.1865040942;
invertebrate_lon[25] = -3.79737805126;
invertebrate_2015[25] = 1;
invertebrate_allocated[25] = 0;
invertebrate_grid_ref[25] = "SH8067";
invertebrate_details[25] = "Grid reference : SH8067<BR>County : Conwy - Conwy<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[26] = 53.2907636017;
invertebrate_lon[26] = -3.3966620632;
invertebrate_2015[26] = 1;
invertebrate_allocated[26] = 0;
invertebrate_grid_ref[26] = "SJ0778";
invertebrate_details[26] = "Grid reference : SJ0778<BR>County : Sir Ddinbych - Denbighshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[27] = 52.8242997247;
invertebrate_lon[27] = -3.30744776728;
invertebrate_2015[27] = 1;
invertebrate_allocated[27] = 0;
invertebrate_grid_ref[27] = "SJ1226";
invertebrate_details[27] = "Grid reference : SJ1226<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[28] = 52.6267374656;
invertebrate_lon[28] = -3.28677673972;
invertebrate_2015[28] = 1;
invertebrate_allocated[28] = 0;
invertebrate_grid_ref[28] = "SJ1304";
invertebrate_details[28] = "Grid reference : SJ1304<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[29] = 52.7172422833;
invertebrate_lon[29] = -3.2302183645;
invertebrate_2015[29] = 1;
invertebrate_allocated[29] = 0;
invertebrate_grid_ref[29] = "SJ1714";
invertebrate_details[29] = "Grid reference : SJ1714<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[30] = 53.2388140454;
invertebrate_lon[30] = -3.21515485731;
invertebrate_2015[30] = 1;
invertebrate_allocated[30] = 0;
invertebrate_grid_ref[30] = "SJ1972";
invertebrate_details[30] = "Grid reference : SJ1972<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[31] = 52.6730471091;
invertebrate_lon[31] = -3.15502613582;
invertebrate_2015[31] = 1;
invertebrate_allocated[31] = 0;
invertebrate_grid_ref[31] = "SJ2209";
invertebrate_details[31] = "Grid reference : SJ2209<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[32] = 52.7361064011;
invertebrate_lon[32] = -3.14188107572;
invertebrate_2015[32] = 1;
invertebrate_allocated[32] = 0;
invertebrate_grid_ref[32] = "SJ2316";
invertebrate_details[32] = "Grid reference : SJ2316<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[33] = 53.1586686845;
invertebrate_lon[33] = -3.13810779667;
invertebrate_2015[33] = 1;
invertebrate_allocated[33] = 0;
invertebrate_grid_ref[33] = "SJ2463";
invertebrate_details[33] = "Grid reference : SJ2463<BR>County : Sir y Fflint - Flintshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[34] = 53.3656577161;
invertebrate_lon[34] = -3.11355946081;
invertebrate_2015[34] = 1;
invertebrate_allocated[34] = 0;
invertebrate_grid_ref[34] = "SJ2686";
invertebrate_details[34] = "Grid reference : SJ2686<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[35] = 53.0253081917;
invertebrate_lon[35] = -2.97058296714;
invertebrate_2015[35] = 1;
invertebrate_allocated[35] = 0;
invertebrate_grid_ref[35] = "SJ3548";
invertebrate_details[35] = "Grid reference : SJ3548<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Adult_dragonfly_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[36] = 53.0976847836;
invertebrate_lon[36] = -2.91247124262;
invertebrate_2015[36] = 1;
invertebrate_allocated[36] = 0;
invertebrate_grid_ref[36] = "SJ3956";
invertebrate_details[36] = "Grid reference : SJ3956<BR>County : Wrecsam - Wrexham<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[37] = 52.686738;
invertebrate_lon[37] = -2.4748312;
invertebrate_2015[37] = 1;
invertebrate_allocated[37] = 0;
invertebrate_grid_ref[37] = "SJ6810";
invertebrate_details[37] = "Grid reference : SJ6810<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[38] = 53.4236821689;
invertebrate_lon[38] = -2.51312008068;
invertebrate_2015[38] = 1;
invertebrate_allocated[38] = 0;
invertebrate_grid_ref[38] = "SJ6692";
invertebrate_details[38] = "Grid reference : SJ6692<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[39] = 53.316335;
invertebrate_lon[39] = -2.3767204;
invertebrate_2015[39] = 1;
invertebrate_allocated[39] = 0;
invertebrate_grid_ref[39] = "SJ7580";
invertebrate_details[39] = "Grid reference : SJ7580<BR>County : Cheshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[40] = 53.0741901076;
invertebrate_lon[40] = -2.07609135513;
invertebrate_2015[40] = 1;
invertebrate_allocated[40] = 0;
invertebrate_grid_ref[40] = "SJ9553";
invertebrate_details[40] = "Grid reference : SJ9553<BR>County : Staffordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[41] = 53.469736;
invertebrate_lon[41] = -2.0014677;
invertebrate_2015[41] = 1;
invertebrate_allocated[41] = 0;
invertebrate_grid_ref[41] = "SK0097";
invertebrate_details[41] = "Grid reference :SK0097<BR>County : Greater Manchester<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[42] = 52.1923503245;
invertebrate_lon[42] = -4.10815100409;
invertebrate_2015[42] = 1;
invertebrate_allocated[42] = 0;
invertebrate_grid_ref[42] = "SN5657";
invertebrate_details[42] = "Grid reference : SN5657<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[43] = 52.619598;
invertebrate_lon[43] = -0.89359904;
invertebrate_2015[43] = 1;
invertebrate_allocated[43] = 0;
invertebrate_grid_ref[43] = "SK7503";
invertebrate_details[43] = "Grid reference : SK7503<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[44] = 52.662587;
invertebrate_lon[44] = -0.70029281;
invertebrate_2015[44] = 1;
invertebrate_allocated[44] = 0;
invertebrate_grid_ref[44] = "SK8808";
invertebrate_details[44] = "Grid reference : SK8808<BR>County : Rutland<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[45] = 52.1690933854;
invertebrate_lon[45] = -4.38491350858;
invertebrate_2015[45] = 1;
invertebrate_allocated[45] = 0;
invertebrate_grid_ref[45] = "SN3755";
invertebrate_details[45] = "Grid reference : SN3755<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[46] = 52.5457764465;
invertebrate_lon[46] = -3.94806516098;
invertebrate_2015[46] = 1;
invertebrate_allocated[46] = 0;
invertebrate_grid_ref[46] = "SN6896";
invertebrate_details[46] = "Grid reference : SN6896<BR>County : Sir Ceredigion - Ceredigion<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[47] = 52.402995;
invertebrate_lon[47] = -3.8829137;
invertebrate_2015[47] = 1;
invertebrate_allocated[47] = 0;
invertebrate_grid_ref[47] = "SN7280";
invertebrate_details[47] = "Grid reference : SN7280<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[48] = 52.442629198;
invertebrate_lon[48] = -3.63452120174;
invertebrate_2015[48] = 1;
invertebrate_allocated[48] = 0;
invertebrate_grid_ref[48] = "SN8984";
invertebrate_details[48] = "Grid reference : SN8984<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[49] = 51.8788852824;
invertebrate_lon[49] = -3.42512399392;
invertebrate_2015[49] = 1;
invertebrate_allocated[49] = 0;
invertebrate_grid_ref[49] = "SO0221";
invertebrate_details[49] = "Grid reference : SO0221<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[50] = 52.3644088498;
invertebrate_lon[50] = -3.42601044244;
invertebrate_2015[50] = 1;
invertebrate_allocated[50] = 0;
invertebrate_grid_ref[50] = "SO0375";
invertebrate_details[50] = "Grid reference : SO0375<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[51] = 52.4641369769;
invertebrate_lon[51] = -3.35563025193;
invertebrate_2015[51] = 1;
invertebrate_allocated[51] = 0;
invertebrate_grid_ref[51] = "SO0886";
invertebrate_details[51] = "Grid reference : SO0886<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[52] = 52.0957964621;
invertebrate_lon[52] = -3.32983663302;
invertebrate_2015[52] = 1;
invertebrate_allocated[52] = 0;
invertebrate_grid_ref[52] = "SO0945";
invertebrate_details[52] = "Grid reference : SO0945<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[53] = 52.5284972133;
invertebrate_lon[53] = -3.22493708831;
invertebrate_2015[53] = 1;
invertebrate_allocated[53] = 0;
invertebrate_grid_ref[53] = "SO1793";
invertebrate_details[53] = "Grid reference : SO1793<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[54] = 52.2230462845;
invertebrate_lon[54] = -3.20187369128;
invertebrate_2015[54] = 1;
invertebrate_allocated[54] = 0;
invertebrate_grid_ref[54] = "SO1859";
invertebrate_details[54] = "Grid reference : SO1859<BR>County : Powys - Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[55] = 52.330938;
invertebrate_lon[55] = -3.2047588;
invertebrate_2015[55] = 1;
invertebrate_allocated[55] = 0;
invertebrate_grid_ref[55] = "SO1871";
invertebrate_details[55] = "Grid reference : SO1871<BR>County : Powys<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[56] = 52.566926;
invertebrate_lon[56] = -2.9604011;
invertebrate_2015[56] = 1;
invertebrate_allocated[56] = 0;
invertebrate_grid_ref[56] = "SO3597";
invertebrate_details[56] = "Grid reference : SO3597<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[57] = 52.002604;
invertebrate_lon[57] = -2.6569265;
invertebrate_2015[57] = 1;
invertebrate_allocated[57] = 0;
invertebrate_grid_ref[57] = "SO5534";
invertebrate_details[57] = "Grid reference : SO5534<BR>County : Shropshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[58] = 52.183371;
invertebrate_lon[58] = -2.4548225;
invertebrate_2015[58] = 1;
invertebrate_allocated[58] = 0;
invertebrate_grid_ref[58] = "SO6954";
invertebrate_details[58] = "Grid reference : SO6954<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[59] = 52.2013166154;
invertebrate_lon[59] = -2.45502823558;
invertebrate_2015[59] = 1;
invertebrate_allocated[59] = 0;
invertebrate_grid_ref[59] = " SO8390";
invertebrate_details[59] = "Grid reference : SO8390<BR>County : Herefordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[60] = 52.148241;
invertebrate_lon[60] = -2.103717;
invertebrate_2015[60] = 1;
invertebrate_allocated[60] = 0;
invertebrate_grid_ref[60] = " SO9350";
invertebrate_details[60] = "Grid reference : SO9350<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[61] = 52.112301;
invertebrate_lon[61] = -2.074428;
invertebrate_2015[61] = 1;
invertebrate_allocated[61] = 0;
invertebrate_grid_ref[61] = "SO9546";
invertebrate_details[61] = "Grid reference : SO9546<BR>County : Worcestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[62] = 52.498895;
invertebrate_lon[62] = -2.0456206;
invertebrate_2015[62] = 1;
invertebrate_allocated[62] = 0;
invertebrate_grid_ref[62] = "SO9789";
invertebrate_details[62] = "Grid reference : SO9789<BR>County : West Midlands<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[63] = 52.5511248603;
invertebrate_lon[63] = -1.36726662756;
invertebrate_2015[63] = 1;
invertebrate_allocated[63] = 0;
invertebrate_grid_ref[63] = "SP4395";
invertebrate_details[63] = "Grid reference : SP4395<BR>County : Leicestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[64] = 51.7059739276;
invertebrate_lon[64] = -1.36465409396;
invertebrate_2015[64] = 1;
invertebrate_allocated[64] = 0;
invertebrate_grid_ref[64] = "SP4401";
invertebrate_details[64] = "Grid reference : SP4401<BR>County : Berkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[65] = 51.8767961879;
invertebrate_lon[65] = -1.3622492636;
invertebrate_2015[65] = 1;
invertebrate_allocated[65] = 0;
invertebrate_grid_ref[65] = "SP4420";
invertebrate_details[65] = "Grid reference : SP4420<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[66] = 52.074543;
invertebrate_lon[66] = -1.3448443;
invertebrate_2015[66] = 1;
invertebrate_allocated[66] = 0;
invertebrate_grid_ref[66] = " SP4542";
invertebrate_details[66] = "Grid reference : SP4542<BR>County : Oxfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[67] = 52.334905;
invertebrate_lon[67] = -1.2823008;
invertebrate_2015[67] = 1;
invertebrate_allocated[67] = 0;
invertebrate_grid_ref[67] = " SP4971";
invertebrate_details[67] = "Grid reference : SP4971<BR>County : Warwickshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[68] = 51.816901;
invertebrate_lon[68] = -0.65222472;
invertebrate_2015[68] = 1;
invertebrate_allocated[68] = 0;
invertebrate_grid_ref[68] = "SP9314";
invertebrate_details[68] = "Grid reference : SP9314<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[69] = 50.9428350041;
invertebrate_lon[69] = -4.5351391786;
invertebrate_2015[69] = 1;
invertebrate_allocated[69] = 0;
invertebrate_grid_ref[69] = "SS2219";
invertebrate_details[69] = "Grid reference : SS2219<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[70] = 51.0162310722;
invertebrate_lon[70] = -3.99732359911;
invertebrate_2015[70] = 1;
invertebrate_allocated[70] = 0;
invertebrate_grid_ref[70] = "SS6026";
invertebrate_details[70] = "Grid reference : SS6026<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[71] = 50.9448176679;
invertebrate_lon[71] = -3.96578895546;
invertebrate_2015[71] = 1;
invertebrate_allocated[71] = 0;
invertebrate_grid_ref[71] = "SS6218";
invertebrate_details[71] = "Grid reference : SS6218<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[72] = 50.9277869015;
invertebrate_lon[72] = -3.90814819152;
invertebrate_2015[72] = 1;
invertebrate_allocated[72] = 0;
invertebrate_grid_ref[72] = "SS6616";
invertebrate_details[72] = "Grid reference : SS6616<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[73] = 51.014761;
invertebrate_lon[73] = -3.4982159;
invertebrate_2015[73] = 1;
invertebrate_allocated[73] = 0;
invertebrate_grid_ref[73] = "SS9525";
invertebrate_details[73] = "Grid reference : SS9525<BR>County : Devon<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[74] = 51.4559060421;
invertebrate_lon[74] = -2.07337052562;
invertebrate_2015[74] = 1;
invertebrate_allocated[74] = 0;
invertebrate_grid_ref[74] = "ST9573";
invertebrate_details[74] = "Grid reference : ST9573<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[75] = 51.6263428283;
invertebrate_lon[75] = -1.68359109016;
invertebrate_2015[75] = 1;
invertebrate_allocated[75] = 0;
invertebrate_grid_ref[75] = "SU2292";
invertebrate_details[75] = "Grid reference : SU2292<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[76] = 50.9607812033;
invertebrate_lon[76] = -1.63117650697;
invertebrate_2015[76] = 1;
invertebrate_allocated[76] = 0;
invertebrate_grid_ref[76] = "SU2618";
invertebrate_details[76] = "Grid reference : SU2618<BR>County : Wiltshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[77] = 50.8871802393;
invertebrate_lon[77] = -1.27633923263;
invertebrate_2015[77] = 1;
invertebrate_allocated[77] = 0;
invertebrate_grid_ref[77] = "SU5110";
invertebrate_details[77] = "Grid reference : SU5110<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[78] = 51.1553990917;
invertebrate_lon[78] = -1.05766340784;
invertebrate_2015[78] = 1;
invertebrate_allocated[78] = 0;
invertebrate_grid_ref[78] = "SU6640";
invertebrate_details[78] = "Grid reference : SU6640<BR>County : Hampshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[79] = 51.314565825;
invertebrate_lon[79] = -0.767428778795;
invertebrate_2015[79] = 1;
invertebrate_allocated[79] = 0;
invertebrate_grid_ref[79] = "SU8658";
invertebrate_details[79] = "Grid reference : SU8658<BR>County : Surrey<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[80] = 50.836244;
invertebrate_lon[80] = -0.60965864;
invertebrate_2015[80] = 1;
invertebrate_allocated[80] = 0;
invertebrate_grid_ref[80] = " SU9805";
invertebrate_details[80] = "Grid reference : SU9805<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[81] = 50.242064551;
invertebrate_lon[81] = -5.22716181437;
invertebrate_2015[81] = 1;
invertebrate_allocated[81] = 0;
invertebrate_grid_ref[81] = "SW7043";
invertebrate_details[81] = "Grid reference : SW7043<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[82] = 50.4229672212;
invertebrate_lon[82] = -4.84518619362;
invertebrate_2015[82] = 1;
invertebrate_allocated[82] = 0;
invertebrate_grid_ref[82] = "SW9862";
invertebrate_details[82] = "Grid reference : SW9862<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[83] = 50.5726288415;
invertebrate_lon[83] = -4.59995147754;
invertebrate_2015[83] = 1;
invertebrate_allocated[83] = 0;
invertebrate_grid_ref[83] = "SX1678";
invertebrate_details[83] = "Grid reference : SX1678<BR>County : Cornwall<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[84] = 50.779579;
invertebrate_lon[84] = -2.6821859;
invertebrate_2015[84] = 1;
invertebrate_allocated[84] = 0;
invertebrate_grid_ref[84] = "SY5298";
invertebrate_details[84] = "Grid reference : SY5298<BR>County : Dorset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[85] = 50.6637838472;
invertebrate_lon[85] = -1.5627623943;
invertebrate_2015[85] = 1;
invertebrate_allocated[85] = 0;
invertebrate_grid_ref[85] = "SZ3185";
invertebrate_details[85] = "Grid reference : SZ3185<BR>County : Isle of Wight<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[86] = 54.0083437589;
invertebrate_lon[86] = -0.475581682379;
invertebrate_2015[86] = 1;
invertebrate_allocated[86] = 0;
invertebrate_grid_ref[86] = "TA0058";
invertebrate_details[86] = "Grid reference : TA0058<BR>County : East Riding of Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[87] = 54.3677174898;
invertebrate_lon[87] = -0.462299842079;
invertebrate_2015[87] = 1;
invertebrate_allocated[87] = 0;
invertebrate_grid_ref[87] = "TA0098";
invertebrate_details[87] = "Grid reference : TA0098<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[88] = 54.2054089071;
invertebrate_lon[88] = -0.4223360298;
invertebrate_2015[88] = 1;
invertebrate_allocated[88] = 0;
invertebrate_grid_ref[88] = "TA0380";
invertebrate_details[88] = "Grid reference : TA0380<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[89] = 54.139066;
invertebrate_lon[89] = -0.17995673;
invertebrate_2015[89] = 1;
invertebrate_allocated[89] = 0;
invertebrate_grid_ref[89] = "TA1973";
invertebrate_details[89] = "Grid reference : TA1973<BR>County : North Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[90] = 52.0124633685;
invertebrate_lon[90] = -0.471484433724;
invertebrate_2015[90] = 1;
invertebrate_allocated[90] = 0;
invertebrate_grid_ref[90] = "TL0536";
invertebrate_details[90] = "Grid reference : TL0536<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[91] = 52.569311;
invertebrate_lon[91] = -0.42270311;
invertebrate_2015[91] = 1;
invertebrate_allocated[91] = 0;
invertebrate_grid_ref[91] = " TL0798";
invertebrate_details[91] = "Grid reference : TL0798<BR>County : Northamptonshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[92] = 52.2182007512;
invertebrate_lon[92] = -0.391234905322;
invertebrate_2015[92] = 1;
invertebrate_allocated[92] = 0;
invertebrate_grid_ref[92] = "TL1059";
invertebrate_details[92] = "Grid reference : TL1059<BR>County : Bedfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[93] = 51.9241285923;
invertebrate_lon[93] = 0.0199916865488;
invertebrate_2015[93] = 1;
invertebrate_allocated[93] = 0;
invertebrate_grid_ref[93] = "TL3927";
invertebrate_details[93] = "Grid reference : TL3927<BR>County : Hertfordshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[94] = 51.4647362637;
invertebrate_lon[94] = -0.533046978082;
invertebrate_2015[94] = 1;
invertebrate_allocated[94] = 0;
invertebrate_grid_ref[94] = "TQ0275";
invertebrate_details[94] = "Grid reference : TQ0275<BR>County : Buckinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[95] = 50.8388677028;
invertebrate_lon[95] = -0.1550738877;
invertebrate_2015[95] = 1;
invertebrate_allocated[95] = 0;
invertebrate_grid_ref[95] = "TQ3006";
invertebrate_details[95] = "Grid reference : TQ3006<BR>County : East Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"
invertebrate_lat[96] = 50.902296;
invertebrate_lon[96] = -0.18103041;
invertebrate_2015[96] = 1;
invertebrate_allocated[96] = 1;
invertebrate_grid_ref[96] = "TQ2813";
invertebrate_details[96] = "Grid reference : TQ2813<BR>County : Sussex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[97] = 53.316872;
invertebrate_lon[97] = -1.8813774;
invertebrate_2015[97] = 0;
invertebrate_allocated[97] = 0;
invertebrate_grid_ref[97] = "SK0880";
invertebrate_details[97] = "Grid reference : SK0880<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[98] = 53.163989;
invertebrate_lon[98] = -1.8219699;
invertebrate_2015[98] = 0;
invertebrate_allocated[98] = 0;
invertebrate_grid_ref[98] = "SK1263";
invertebrate_details[98] = "Grid reference : SK1263<BR>County : Derbyshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[99] = 53.412407;
invertebrate_lon[99] = -1.098807;
invertebrate_2015[99] = 0;
invertebrate_allocated[99] = 0;
invertebrate_grid_ref[99] = "SK6091";
invertebrate_details[99] = "Grid reference : SK6091<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[100] = 53.483589;
invertebrate_lon[100] = -1.0068801;
invertebrate_2015[100] = 0;
invertebrate_allocated[100] = 0;
invertebrate_grid_ref[100] = "SK6699";
invertebrate_details[100] = "Grid reference : SK6699<BR>County : South Yorkshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[101] = 52.890163;
invertebrate_lon[101] = -0.99076713;
invertebrate_2015[101] = 0;
invertebrate_allocated[101] = 0;
invertebrate_grid_ref[101] = "SK6833";
invertebrate_details[101] = "Grid reference : SK6833<BR>County : Nottinghamshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[102] = 51.840874;
invertebrate_lon[102] = -4.9772323;
invertebrate_2015[102] = 0;
invertebrate_allocated[102] = 0;
invertebrate_grid_ref[102] = "SM9520";
invertebrate_details[102] = "Grid reference : SM9520<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[103] = 51.950078;
invertebrate_lon[103] = -4.9262472;
invertebrate_2015[103] = 0;
invertebrate_allocated[103] = 0;
invertebrate_grid_ref[103] = "SM9932";
invertebrate_details[103] = "Grid reference : SM9932<BR>County : Sir Benfro - Pembrokeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[104] = 51.844256;
invertebrate_lon[104] = -4.4402295;
invertebrate_2015[104] = 0;
invertebrate_allocated[104] = 0;
invertebrate_grid_ref[104] = "SN3219";
invertebrate_details[104] = "Grid reference : SN3219<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[105] = 51.730948;
invertebrate_lon[105] = -4.2603315;
invertebrate_2015[105] = 0;
invertebrate_allocated[105] = 0;
invertebrate_grid_ref[105] = "SN4406";
invertebrate_details[105] = "Grid reference : SN4406<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[106] = 51.961044;
invertebrate_lon[106] = -3.9662199;
invertebrate_2015[106] = 0;
invertebrate_allocated[106] = 0;
invertebrate_grid_ref[106] = "SN6531";
invertebrate_details[106] = "Grid reference : SN6531<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[107] = 51.727657;
invertebrate_lon[107] = -3.9415926;
invertebrate_2015[107] = 0;
invertebrate_allocated[107] = 0;
invertebrate_grid_ref[107] = "SN6605";
invertebrate_details[107] = "Grid reference : SN6605<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[108] = 51.720526;
invertebrate_lon[108] = -3.8254635;
invertebrate_2015[108] = 0;
invertebrate_allocated[108] = 0;
invertebrate_grid_ref[108] = "SN7404";
invertebrate_details[108] = "Grid reference : SN7404<BR>County : Castell-nedd Port Talbot - Neath Port Talbot<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[109] = 51.900703;
invertebrate_lon[109] = -3.8036891;
invertebrate_2015[109] = 0;
invertebrate_allocated[109] = 0;
invertebrate_grid_ref[109] = "SN7624";
invertebrate_details[109] = "Grid reference : SN7624<BR>County : Sir Gaerfyrddin - Carmarthenshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[110] = 51.798031;
invertebrate_lon[110] = -3.4225284;
invertebrate_2015[110] = 0;
invertebrate_allocated[110] = 0;
invertebrate_grid_ref[110] = "SO0212";
invertebrate_details[110] = "Grid reference : SO0212<BR>County : Merthyr Tudful - Merthyr Tydfil<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[111] = 51.857015;
invertebrate_lon[111] = -2.916167;
invertebrate_2015[111] = 0;
invertebrate_allocated[111] = 0;
invertebrate_grid_ref[111] = "SO3718";
invertebrate_details[111] = "Grid reference : SO3718<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[112] = 51.812397;
invertebrate_lon[112] = -2.8717438;
invertebrate_2015[112] = 0;
invertebrate_allocated[112] = 0;
invertebrate_grid_ref[112] = "SO4013";
invertebrate_details[112] = "Grid reference : SO4013<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[113] = 51.741636;
invertebrate_lon[113] = -2.6965827;
invertebrate_2015[113] = 0;
invertebrate_allocated[113] = 0;
invertebrate_grid_ref[113] = "SO5205";
invertebrate_details[113] = "Grid reference : SO5205<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[114] = 51.813559;
invertebrate_lon[114] = -2.6976914;
invertebrate_2015[114] = 0;
invertebrate_allocated[114] = 0;
invertebrate_grid_ref[114] = "SO5213";
invertebrate_details[114] = "Grid reference : SO5213<BR>County : Sir Fynwy - Monmouthshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[115] = 51.833458;
invertebrate_lon[115] = -2.1900643;
invertebrate_2015[115] = 0;
invertebrate_allocated[115] = 0;
invertebrate_grid_ref[115] = "SO8715";
invertebrate_details[115] = "Grid reference : SO8715<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[116] = 51.579845;
invertebrate_lon[116] = -4.1662199;
invertebrate_2015[116] = 0;
invertebrate_allocated[116] = 0;
invertebrate_grid_ref[116] = "SS5089";
invertebrate_details[116] = "Grid reference : SS5089<BR>County : Abertawe - Swansea<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[117] = 51.464384;
invertebrate_lon[117] = -3.4985023;
invertebrate_2015[117] = 0;
invertebrate_allocated[117] = 0;
invertebrate_grid_ref[117] = "SS9675";
invertebrate_details[117] = "Grid reference : SS9675<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[118] = 51.429151;
invertebrate_lon[118] = -3.4398094;
invertebrate_2015[118] = 0;
invertebrate_allocated[118] = 0;
invertebrate_grid_ref[118] = "ST0071";
invertebrate_details[118] = "Grid reference : ST0071<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[119] = 51.465628;
invertebrate_lon[119] = -3.3977686;
invertebrate_2015[119] = 0;
invertebrate_allocated[119] = 0;
invertebrate_grid_ref[119] = "ST0375";
invertebrate_details[119] = "Grid reference : ST0375<BR>County : Bro Morgannwg - the Vale of Glamorgan<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[120] = 51.169325;
invertebrate_lon[120] = -3.360182;
invertebrate_2015[120] = 0;
invertebrate_allocated[120] = 0;
invertebrate_grid_ref[120] = "ST0542";
invertebrate_details[120] = "Grid reference : ST0542<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[121] = 51.585844;
invertebrate_lon[121] = -3.0839063;
invertebrate_2015[121] = 0;
invertebrate_allocated[121] = 0;
invertebrate_grid_ref[121] = "ST2588";
invertebrate_details[121] = "Grid reference : ST2588<BR>County : Casnewydd - Newport<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[122] = 51.301708;
invertebrate_lon[122] = -2.5751468;
invertebrate_2015[122] = 0;
invertebrate_allocated[122] = 0;
invertebrate_grid_ref[122] = "ST6056";
invertebrate_details[122] = "Grid reference : ST6056<BR>County : Gloucestershire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[123] = 51.284492;
invertebrate_lon[123] = -2.388528;
invertebrate_2015[123] = 0;
invertebrate_allocated[123] = 0;
invertebrate_grid_ref[123] = "ST7354";
invertebrate_details[123] = "Grid reference : ST7354<BR>County : Somerset<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[124] = 53.333101;
invertebrate_lon[124] = -0.39466768;
invertebrate_2015[124] = 0;
invertebrate_allocated[124] = 0;
invertebrate_grid_ref[124] = "TF0783";
invertebrate_details[124] = "Grid reference : TF0783<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[125] = 53.332898;
invertebrate_lon[125] = -0.37965746;
invertebrate_2015[125] = 0;
invertebrate_allocated[125] = 0;
invertebrate_grid_ref[125] = "TF0883";
invertebrate_details[125] = "Grid reference : TF0883<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[126] = 52.595469;
invertebrate_lon[126] = -0.36270666;
invertebrate_2015[126] = 0;
invertebrate_allocated[126] = 0;
invertebrate_grid_ref[126] = "TF1101";
invertebrate_details[126] = "Grid reference : TF1101<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[127] = 53.368007;
invertebrate_lon[127] = -0.31820437;
invertebrate_2015[127] = 0;
invertebrate_allocated[127] = 0;
invertebrate_grid_ref[127] = "TF1287";
invertebrate_details[127] = "Grid reference : TF1287<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[128] = 52.592888;
invertebrate_lon[128] = -0.18563893;
invertebrate_2015[128] = 0;
invertebrate_allocated[128] = 0;
invertebrate_grid_ref[128] = "TF2301";
invertebrate_details[128] = "Grid reference : TF2301<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[129] = 52.661163;
invertebrate_lon[129] = 0.038994002;
invertebrate_2015[129] = 0;
invertebrate_allocated[129] = 0;
invertebrate_grid_ref[129] = "TF3809";
invertebrate_details[129] = "Grid reference : TF3809<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[130] = 52.992779;
invertebrate_lon[130] = 0.099284333;
invertebrate_2015[130] = 0;
invertebrate_allocated[130] = 0;
invertebrate_grid_ref[130] = "TF4146";
invertebrate_details[130] = "Grid reference : TF4146<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[131] = 53.108215;
invertebrate_lon[131] = 0.17960638;
invertebrate_2015[131] = 0;
invertebrate_allocated[131] = 0;
invertebrate_grid_ref[131] = "TF4659";
invertebrate_details[131] = "Grid reference : TF4659<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[132] = 53.29629;
invertebrate_lon[132] = 0.21918516;
invertebrate_2015[132] = 0;
invertebrate_allocated[132] = 0;
invertebrate_grid_ref[132] = "TF4880";
invertebrate_details[132] = "Grid reference : TF4880<BR>County : Lincolnshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[133] = 52.641836;
invertebrate_lon[133] = 0.57023036;
invertebrate_2015[133] = 0;
invertebrate_allocated[133] = 0;
invertebrate_grid_ref[133] = "TF7408";
invertebrate_details[133] = "Grid reference : TF7408<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[134] = 52.599147;
invertebrate_lon[134] = 0.86309696;
invertebrate_2015[134] = 0;
invertebrate_allocated[134] = 0;
invertebrate_grid_ref[134] = "TF9404";
invertebrate_details[134] = "Grid reference : TF9404<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[135] = 52.718097;
invertebrate_lon[135] = 1.137457;
invertebrate_2015[135] = 0;
invertebrate_allocated[135] = 0;
invertebrate_grid_ref[135] = "TG1218";
invertebrate_details[135] = "Grid reference : TG1218<BR>County : Norfolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[136] = 51.708771;
invertebrate_lon[136] = -0.004118918;
invertebrate_2015[136] = 0;
invertebrate_allocated[136] = 0;
invertebrate_grid_ref[136] = "TL3803";
invertebrate_details[136] = "Grid reference : TL3803<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[137] = 52.013267;
invertebrate_lon[137] = 0.067695002;
invertebrate_2015[137] = 0;
invertebrate_allocated[137] = 0;
invertebrate_grid_ref[137] = "TL4237";
invertebrate_details[137] = "Grid reference : TL4237<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[138] = 52.296979;
invertebrate_lon[138] = 0.28620994;
invertebrate_2015[138] = 0;
invertebrate_allocated[138] = 0;
invertebrate_grid_ref[138] = "TL5669";
invertebrate_details[138] = "Grid reference : TL5669<BR>County : Cambridgeshire<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[139] = 52.172896;
invertebrate_lon[139] = 0.63086107;
invertebrate_2015[139] = 0;
invertebrate_allocated[139] = 0;
invertebrate_grid_ref[139] = "TL8056";
invertebrate_details[139] = "Grid reference : TL8056<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[140] = 52.298627;
invertebrate_lon[140] = 0.63830969;
invertebrate_2015[140] = 0;
invertebrate_allocated[140] = 0;
invertebrate_grid_ref[140] = "TL8070";
invertebrate_details[140] = "Grid reference : TL8070<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[141] = 52.03074;
invertebrate_lon[141] = 1.278641;
invertebrate_2015[141] = 0;
invertebrate_allocated[141] = 0;
invertebrate_grid_ref[141] = "TM2542";
invertebrate_details[141] = "Grid reference : TM2542<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[142] = 52.147898;
invertebrate_lon[142] = 1.5796635;
invertebrate_2015[142] = 0;
invertebrate_allocated[142] = 0;
invertebrate_grid_ref[142] = "TM4556";
invertebrate_details[142] = "Grid reference : TM4556<BR>County : Suffolk<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[143] = 51.597876;
invertebrate_lon[143] = 0.16428629;
invertebrate_2015[143] = 0;
invertebrate_allocated[143] = 0;
invertebrate_grid_ref[143] = "TQ5091";
invertebrate_details[143] = "Grid reference : TQ5091<BR>County : London<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[144] = 51.546374;
invertebrate_lon[144] = 0.49358131;
invertebrate_2015[144] = 0;
invertebrate_allocated[144] = 0;
invertebrate_grid_ref[144] = "TQ7386";
invertebrate_details[144] = "Grid reference : TQ7386<BR>County : Essex<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[145] = 51.456238;
invertebrate_lon[145] = 0.50305999;
invertebrate_2015[145] = 0;
invertebrate_allocated[145] = 0;
invertebrate_grid_ref[145] = "TQ7476";
invertebrate_details[145] = "Grid reference : TQ7476<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[146] = 51.463663;
invertebrate_lon[146] = 0.5754557;
invertebrate_2015[146] = 0;
invertebrate_allocated[146] = 0;
invertebrate_grid_ref[146] = "TQ7977";
invertebrate_details[146] = "Grid reference : TQ7977<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[147] = 51.148815;
invertebrate_lon[147] = 0.95828535;
invertebrate_2015[147] = 0;
invertebrate_allocated[147] = 0;
invertebrate_grid_ref[147] = "TR0743";
invertebrate_details[147] = "Grid reference : TR0743<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"

invertebrate_lat[148] = 51.300375;
invertebrate_lon[148] = 1.0110682;
invertebrate_2015[148] = 0;
invertebrate_allocated[148] = 0;
invertebrate_grid_ref[148] = "TR1060";
invertebrate_details[148] = "Grid reference : TR1060<BR>County : Kent<BR><a target='_blank' href='http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/Invertebrate_family_methods_overview.pdf'>View survey methodology</a><br>"





var prev_onclickwindow;

function create_marker(posn, gridref, marker_id, icon_img) {
  var markerOptions = {
    position: posn,
    title: gridref,
    map: map,
    visible: false,
    icon: icon_img
  };
  var new_marker = new google.maps.Marker(markerOptions);
  
  var marker_details;
  //Get the details for this marker from the appropriate network
  if (marker_id.substring(0,2) == 'to'){
    marker_details = toad_details[parseInt(marker_id.substring(3))]
  }
  if (marker_id.substring(0,2) == 'gc'){
    marker_details = gcn_details[parseInt(marker_id.substring(3))];
  }
  if (marker_id.substring(0,2) == 'ed'){
    marker_details = edna_details[parseInt(marker_id.substring(3))];
  }
  if (marker_id.substring(0,2) == 'we'){
    marker_details = wetland_details[parseInt(marker_id.substring(3))];
  }  
  if (marker_id.substring(0,2) == 'in'){
    marker_details = invertebrate_details[parseInt(marker_id.substring(3))];
  } 
  if (marker_id.substring(0,2) == 'dr'){
    marker_details = dragonfly_details[parseInt(marker_id.substring(3))];
  } 
  if (marker_id.substring(0,2) == 'en'){
    marker_details = environmental_details[parseInt(marker_id.substring(3))];
  }  
    
  var onclickwindow = new google.maps.InfoWindow;
  var infowindow = new google.maps.InfoWindow;

  //Show the square's grid reference on hover over the marker
  google.maps.event.addListener(new_marker,"mouseover", function() {
    infowindow.setContent(gridref);
    prev_infowindow = infowindow;
    infowindow.open(map, this);
  });  
  
  google.maps.event.addListener(new_marker, 'mouseout', function() {
    infowindow.close();
  });
  
  //Open a box on click of the marker (to display county, pdf download link etc)
  google.maps.event.addListener(new_marker, 'click', function() {
    infowindow.close();
    //If there is already a popup window open (from clicking another marker), close that first
    if(prev_onclickwindow) {
           prev_onclickwindow.close();
        }
    onclickwindow.setContent(marker_details);
    onclickwindow.open(map, this);
    //Save current popup so that we can close it when a user clicks another marker
    prev_onclickwindow = onclickwindow;
  });
  
  //Add marker to array of markers for the appropriate network
  if (marker_id.substring(0,2) == 'to')
  {
    toad_markers.push(new_marker);
  }
  if (marker_id.substring(0,2) == 'gc')
  {
    gcn_markers.push(new_marker);
  }
  if (marker_id.substring(0,2) == 'ed')
  {
    edna_markers.push(new_marker);
  }   
  if (marker_id.substring(0,2) == 'we')
  {
    wetland_markers.push(new_marker);
  }  
  if (marker_id.substring(0,2) == 'in')
  {
    invertebrate_markers.push(new_marker);
  }  
  if (marker_id.substring(0,2) == 'dr')
  {
    dragonfly_markers.push(new_marker);
  }  
  if (marker_id.substring(0,2) == 'en')
  {
    environmental_markers.push(new_marker);
  }  
  return new_marker;
}

function show_hide_markers(radioButton)
{
  if (radioButton.id == "toad_chk_box") {
      for (i=0; i<toad_markers.length; i++){
      toad_markers[i].setVisible(true);
    }
  } else {
      for (i=0; i<toad_markers.length; i++){
          toad_markers[i].setVisible(false);
    }
  }
  
  if (radioButton.id == "gcn_chk_box") {
        for (i=0; i<gcn_markers.length; i++){
      gcn_markers[i].setVisible(true);
    }
  } else {
      for (i=0; i<gcn_markers.length; i++){
      gcn_markers[i].setVisible(false);
    }
  }

  if (radioButton.id == "edna_chk_box") {
    for (i=0; i<edna_markers.length; i++){
      edna_markers[i].setVisible(true);
    }
  } else {
    for (i=0; i<edna_markers.length; i++){
      edna_markers[i].setVisible(false);
    }
  }

  if (radioButton.id == "wetland_chk_box"){
    for (i=0; i<wetland_markers.length; i++){
      wetland_markers[i].setVisible(true);
    }
  } else {
    for (i=0; i<wetland_markers.length; i++){
      wetland_markers[i].setVisible(false);
    }
  }
  
  if (radioButton.id == "invertebrate_chk_box"){
    for (i=0; i<invertebrate_markers.length; i++){
      invertebrate_markers[i].setVisible(true);
    }
  } else {
    for (i=0; i<invertebrate_markers.length; i++){
      invertebrate_markers[i].setVisible(false);
    }
  }
  
  if (radioButton.id == "dragonfly_chk_box"){
    for (i=0; i<dragonfly_markers.length; i++){
      dragonfly_markers[i].setVisible(true);
    }
  } else {
    for (i=0; i<dragonfly_markers.length; i++){
      dragonfly_markers[i].setVisible(false);
    }
  }
  
  if (radioButton.id == "environmental_chk_box") {
    for (i=0; i<environmental_markers.length; i++){
      environmental_markers[i].setVisible(true);
    }
  } else {
    for (i=0; i<environmental_markers.length; i++){
      environmental_markers[i].setVisible(false);
    }
  }
  
}

function load_markers()
{
  var blue_icon = "http://freshwaterhabitats.org.uk/wp-content/uploads/2015/09/blue_marker.png";
  var red_icon = "http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/red_marker.png";
  var yellow_icon = "http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/yellow_marker.png";
  var grey_icon = "http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/grey_marker.png";
  for (i=0; i<toad_lat.length; i++){
    if(toad_2015[i]==1){
      if(toad_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(toad_lat[i], toad_lon[i]), toad_grid_ref[i], 'to_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(toad_lat[i], toad_lon[i]), toad_grid_ref[i], 'to_'+i, red_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(toad_lat[i], toad_lon[i]), toad_grid_ref[i], 'to_'+i, grey_icon);
    }
    toad_markers.push(myMarker);
  }
  for (i=0; i<gcn_lat.length; i++){
    if(gcn_2015[i]==1){
      if(gcn_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(gcn_lat[i], gcn_lon[i]), gcn_grid_ref[i], 'gc_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(gcn_lat[i], gcn_lon[i]), gcn_grid_ref[i], 'gc_'+i, red_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(gcn_lat[i], gcn_lon[i]), gcn_grid_ref[i], 'gc_'+i, grey_icon);
    }
    gcn_markers.push(myMarker);
  }
   for (i=0; i<edna_lat.length; i++){
    if(edna_allocated[i]==0){
      if(edna_thames[i]==0){
        myMarker = create_marker(new google.maps.LatLng(edna_lat[i], edna_lon[i]), edna_grid_ref[i], 'ed_'+i, yellow_icon);
      }
      else {
        myMarker = create_marker(new google.maps.LatLng(edna_lat[i], edna_lon[i]), edna_grid_ref[i], 'ed_'+i, blue_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(edna_lat[i], edna_lon[i]), edna_grid_ref[i], 'ed_'+i, red_icon);
    }
    edna_markers.push(myMarker);
  }
  for (i=0; i<wetland_lat.length; i++){
    if(wetland_2015[i]==1){
      if(wetland_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(wetland_lat[i], wetland_lon[i]), wetland_grid_ref[i], 'we_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(wetland_lat[i], wetland_lon[i]), wetland_grid_ref[i], 'we_'+i, red_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(wetland_lat[i], wetland_lon[i]), wetland_grid_ref[i], 'we_'+i, grey_icon);
    }
    wetland_markers.push(myMarker);
  } 
  for (i=0; i<invertebrate_lat.length; i++){
    if(invertebrate_2015[i]==1){
      if(invertebrate_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(invertebrate_lat[i], invertebrate_lon[i]), invertebrate_grid_ref[i], 'in_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(invertebrate_lat[i], invertebrate_lon[i]), invertebrate_grid_ref[i], 'in_'+i, red_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(invertebrate_lat[i], invertebrate_lon[i]), invertebrate_grid_ref[i], 'in_'+i, grey_icon);
    }
    invertebrate_markers.push(myMarker);
  } 
  for (i=0; i<dragonfly_lat.length; i++){
    if(dragonfly_2015[i]==1){
      if(dragonfly_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(dragonfly_lat[i], dragonfly_lon[i]), dragonfly_grid_ref[i], 'dr_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(dragonfly_lat[i], dragonfly_lon[i]), dragonfly_grid_ref[i], 'dr_'+i, red_icon);
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(dragonfly_lat[i], dragonfly_lon[i]), dragonfly_grid_ref[i], 'dr_'+i, grey_icon);
    }
    dragonfly_markers.push(myMarker);
  } 
  for (i=0; i<environmental_lat.length; i++){
    if(environmental_2015[i]==1){
      if(environmental_allocated[i]==0){
        myMarker = create_marker(new google.maps.LatLng(environmental_lat[i], environmental_lon[i]), environmental_grid_ref[i], 'en_'+i, yellow_icon);
      }
      else{
        myMarker = create_marker(new google.maps.LatLng(environmental_lat[i], environmental_lon[i]), environmental_grid_ref[i], 'en_'+i, red_icon);   
      }
    }
    else{
      myMarker = create_marker(new google.maps.LatLng(environmental_lat[i], environmental_lon[i]), environmental_grid_ref[i], 'en_'+i, grey_icon);
    }
    environmental_markers.push(myMarker);
  }    



function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(54.2, -2.8),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //Start legend code
  var iconBase = '';
  var icons = {
    parking: {
    name: 'Available to survey',
    icon: iconBase + 'http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/yellow_marker.png'
    },
    other: {
    name: 'Available to survey from 2017',
    icon: iconBase + 'http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/grey_marker.png'
    },
    library: {
    name: 'Already allocated to a PondNet volunteer',
    icon: iconBase + 'http://www.freshwaterhabitats.org.uk/wp-content/uploads/2015/03/red_marker.png'
    }
  };

  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name + '<br><br>';
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
  //End legend code
  
  load_markers();
  show_hide_markers(document.getElementById("toad_chk_box"));
    document.getElementById("status").style.visibility = "hidden";  
}

google.maps.event.addDomListener(window, 'load', initialize);
}
    </script>
    
    
</article>

<!--</section>-->
<?php // get_sidebar('tacticals'); ?>

<?php get_footer(); ?>
