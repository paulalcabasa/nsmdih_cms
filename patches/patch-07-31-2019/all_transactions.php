<div class="content-wrapper"> <!-- Content Wrapper. Contains page content -->
    <section class="content-header"> <!-- Content Header (Page header) -->
        <h1>Transactions
            <small>This is page displays all the inventorial items registered in the system</small>
        </h1>
      
    </section>
    <section class="content"> <!-- Main content -->
        <div class="box"> <!-- Default box -->
            <div class="box-header with-border">
                <h3 class="box-title">Sales Orders</h3>
            </div>
             <div class="box-body">
                <div class="row">
                    <div class="col-md-6">
                        <form id="frm_transaction" class="form-horizontal" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                            <input type="hidden" name="start_date" id="start_date" />
                            <input type="hidden" name="end_date" id="end_date" />
                            <div class="form-group">  
                                <label class="col-md-3 control-label">Date</label>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="txt_display_date"
                                     value="<?php echo format_date_slash($start_date) . ' - ' . format_date_slash($end_date);?>"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6"></div>
                </div>

                <table class="table table-bordered" id="tbl_all_transactions">
                    <thead>
                        <tr>
                            <th>Transaction No</th>
                            <th>Customer Type</th>
                            <th>Customer Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php foreach($transactions as $row) { ?>
                        <tr>
                            <td><?php echo $row->transaction_no;?></td>
                            <td><?php echo $row->customer_type;?></td>
                            <td><?php echo $row->customer_name;?></td>
                            <td><?php echo $row->total_amount;?></td>
                            <td><?php echo $row->transaction_date;?></td>
                            <td><?php echo $row->status;?></td>
                            <td>
                                <div class="btn-group">
                                <button type="button" class="btn btn-primary btn-xs dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Action <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a href="<?php echo 'view/'.encode_string($row->transaction_id);?>">View</a></li>
                                    <?php if($row->status == 'Completed' && ($user_type_id == 6 || $user_type_id == 3) ){ ?>
                                        <li><a href="<?php echo 'cancel/'.encode_string($row->transaction_id);?>">Cancel</a></li>    
                                    <?php } ?>
                                     
                                </ul>
                            </div>
                            </td>
                        </tr>
                    <?php } ?>
                    </tbody>
                </table>
             </div>
        </div>
    </section> <!-- /.content -->
</div><!-- /.content-wrapper -->


<script>
/*function initialize_table(start_date,end_date,status_id){
    tbl = $('#tbl_all_transactions').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "<?php echo base_url();?>transaction/dt_all_transactions/"+start_date+"/"+end_date+"/" + status_id
    });

    tbl = $('#tbl_all_transactions').DataTable();
     return tbl;
}*/
    /*function count_pending(){
        $.ajax({
            type:"POST",
            data:{},
            url:"<?php echo base_url();?>transaction/ajax_count_pending_transactions",
            success:function(response){
              $("#pending_ctr").text(response);  
            }
        });
    }*/
$(document).ready(function(){
  
  /*  var start_date;
    var end_date;
    var txt_display_date = $("#txt_display_date").val().split("-");
    start_date = moment(txt_display_date[0],"MM/DD/YYYY").format('YYYY-MM-DD');
    end_date = moment(txt_display_date[1],"MM/DD/YYYY").format('YYYY-MM-DD');
    var tbl = initialize_table(start_date,end_date,1);
    var status_id = 1;
    */
    $('#tbl_all_transactions').DataTable()
    $('#txt_display_date').daterangepicker({
        "showDropdowns": true,
        "showWeekNumbers": true,
          ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });

    $('#txt_display_date').on('apply.daterangepicker', function(ev, picker) {
        start_date = picker.startDate.format('YYYY-MM-DD');
        end_date = picker.endDate.format('YYYY-MM-DD');
        $("#start_date").val(start_date);
        $("#end_date").val(end_date);
        $("#frm_transaction").submit();
    });

   /* $("body").on('click',".btn_get_transactions",function(){
        tbl.destroy();
        status_id = $(this).data('transaction_status');
        tbl = initialize_table(start_date,end_date,status_id);
    });

    var tbl_pending = $('#tbl_pending_transactions').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "<?php echo base_url();?>transaction/dt_pending_transactions"
    });
      
    $("body").on('click',".btn_return_to_inventory",function(){
        var food_id = $(this).data('food_id');
        var quantity = $(this).data('quantity');
        var header_id = $(this).data('header_id');
        $.ajax({
            type:"POST",
            data:{
                temp_transaction_id : header_id,
                food_id : food_id,
                quantity : quantity
            },
            url:"<?php echo base_url();?>transaction/ajax_remove_temp_transaction_line",
            success:function(response){
                alert("Item returned to inventory.");
                tbl_pending.draw();
                count_pending();
            }
        });

    });*/
});
</script>

