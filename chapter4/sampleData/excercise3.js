n + ' written to ' + filepath);

							writeOutRequestBody(chunk);
						});
						
					}else{
						var result = 'success, ' + totalBytesWritten + ' written to ' + filepath;
						console.log(result);
							
						finalize(res, 200, result);
					}

				})();


			});

		});
	});
}).listen(4000);itten, chunk.length, totalBytesWritten, function(err, written){

							if(err){
								finalize(res, 500, util.inspect(err));
							}

							totalBytesWritten += written;

							console.log(totalBytesWritten + ' written to ' + filepath);

							writeOutRequestBody(chunk);
						});
						
					}else{
						var result = 'success, ' + totalBytesWritten + ' written to ' + filepath;
						console.log(result);
							
						finalize(res, 200, result);
					}

				})();


			});

		});
	});
}).listen(4000);itten, chunk.length, totalBytesWritten, function(err, written){

							if(err){
								finalize(res, 500, util.inspect(err));
							}

							totalBytesWritten += written;

							console.log(totalBytesWritten + ' written to ' + filepath);

							writeOutRequestBody(chunk);
						});
						
					}else{
						var result = 'success, ' + totalBytesWritten + ' written to ' + filepath;
						console.log(result);
							
						finalize(res, 200, result);
					}

				})();


			});

		});
	});
}).listen(4000);itten, chunk.length, totalBytesWritten, function(err, written){

							if(err){
								finalize(res, 500, util.inspect(err));
							}

							totalBytesWritten += written;

							console.log(totalBytesWritte